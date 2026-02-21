# Jekyll migration analysis

Two options: update Jekyll in place, or migrate fresh to 11ty. Analysis of each below, plus notes on the build pipeline regardless of choice.

---

## Current setup

**Ruby/Jekyll (severely outdated):**
- Ruby 2.4.3 — EOL since April 2020; current is 3.3.x
- Jekyll 3.8.3 — current is 4.4.x
- Vulnerable gems: `kramdown 1.17.0` (XSS CVEs), `addressable 2.5.2` (ReDoS), `liquid 4.0.0`, `safe_yaml 1.0.4`
- Ruby Sass (`sass 3.5.7` / LibSass) — officially deprecated and abandoned

**Build pipeline — two separate tools, both aging badly:**
- **Brunch** (Node): processes PostCSS CSS, copies images/files → `assets/`
- **Jekyll** (Ruby): generates the site from processed assets
- Brunch hasn't had a meaningful release since ~2021 and is effectively abandoned
- npm dependencies are also stale: `autoprefixer ^8` (current: 10), `postcss-custom-properties ^7` (current: 10), `postcss-import ^11` (current: 16)
- No build command in `netlify.toml` — presumably set in Netlify UI

**Content:**
- 9 collections: links (121), newsletters (442), notes (6), books (1), findings (7), photos (2), projects (7)
- 58 posts, 3 hand-rolled RSS feeds (`feed.xml`, `feeds/links.xml`, `feeds/study.xml`)
- Admin: Netlify CMS (git-gateway) — now called Decap CMS
- GitHub Action: Pinboard → `_links/` crosspost (Node-based, SSG-agnostic — unaffected by either option)

---

## Option 1: Update Jekyll

### What needs to change

**Ruby version** — bump `.ruby-version` and `Gemfile` from `2.4` to `3.3`.

**Gemfile:**
- `jekyll "~> 3.8"` → `"~> 4.4"`
- Add `gem "kramdown-parser-gfm"` (Jekyll 4 requires it; no longer bundled)
- Add `kramdown: { input: GFM }` to `_config.yml`
- Remove `gem "minima"` — custom layouts are already in place; minima is just a leftover from scaffolding
- `jekyll-feed` and `jekyll-seo-tag` come in transitively via minima but aren't actually used (feeds are hand-rolled Liquid files) — neither need to be kept
- `jekyll-sass-converter` — not needed at all; CSS goes through Brunch/PostCSS, not Jekyll's Sass pipeline

**Jekyll 4 breaking changes to check:**
- `{% link %}` tag behavior changed slightly (no longer needs a leading slash) — search templates for uses
- `gems:` config key was removed, now `plugins:` — doesn't appear to be used here
- Otherwise the templates are fairly standard Liquid; changes are likely minimal

**Replace Brunch:**

This is the bigger lift but entirely mechanical. Replace `brunch-config.js` and Brunch devDependencies with `postcss-cli`. The new `package.json` build script would be something like:

```json
"build": "postcss _assets/main.css --use postcss-import autoprefixer cssnano -o assets/css/main.css"
```

`build.sh` stays almost identical — `npm run build` still handles CSS, image/file copies stay as `cp -r`, Jekyll build at the end.

`postcss-custom-properties` can likely be dropped entirely — CSS custom properties are natively supported everywhere now, and there's no IE11 to worry about.

**GitHub Actions:**
- `actions/checkout@v3` → `@v4`
- `actions/setup-node@v3` → `@v4`
- Node 16 → 20

### Assessment
Well-defined scope, low risk, no content or template changes needed. Stops the vulnerability notices. The main question is whether any templates use `{% link %}` in its old form — a quick search confirms or rules out any changes there.

---

## Option 2: Fresh 11ty migration

### The old branch is throwaway

The `jekyll-to-eleventy` branch used **11ty v0.11.1**. Current is **v3.x** — that's effectively a complete API change across three major versions. The branch is not a useful starting point.

What the old branch had actually completed:
- Posts: ~40 of 58 ported
- Links: ~50 of 121 ported
- A few top-level pages
- One CSS pipeline approach (`styles.11ty.js`)
- Missing entirely: all newsletters (442), notes, books, findings, photos, projects, feeds, admin

### What a fresh migration involves

**Good news — templates can stay in Liquid.** 11ty natively supports Liquid, so there's no need to convert everything to Nunjucks. The main template changes are `site.title` → `metadata.title` style substitutions (data comes from `_data/` files instead of `_config.yml`).

**11ty v3 config:**
- New config file: `eleventy.config.js` (or `.cjs` for CommonJS)
- `addFilter()` works across all template languages
- Node 18+ required
- `moment` (from the old branch) is abandoned — use `Intl.DateTimeFormat` or luxon instead

**Collections + permalinks:**
All 9 collection permalink patterns from `_config.yml` need to be replicated exactly in `eleventy.config.js`. Getting these wrong breaks inbound links and feed subscribers. This needs careful testing.

**Data files:**
`_data/rolls.tsv` and `_data/book_quotations.tsv` — Jekyll reads TSV natively, 11ty doesn't. Needs a small custom data file handler (a few lines of JS).

**Feeds:**
The 3 hand-rolled Liquid feed templates need minor updates — mostly swapping `site.` references to `metadata.`.

**CSS pipeline:**
The `styles.11ty.js` approach from the old branch is sound and works in current 11ty (a `.11ty.js` template file that runs PostCSS). This eliminates Brunch entirely — CSS becomes part of the 11ty build. PostCSS plugins just need updating to current versions.

**Build simplification:**
With 11ty, the entire build becomes one command: `npx @11ty/eleventy`. No separate Ruby pipeline. `netlify.toml` just needs a `[build]` section added.

**Netlify CMS (`admin/`):**
Now called Decap CMS but the config format is the same. Git gateway still works. Low-effort to verify.

### What the old migration did not complete (full scope)

Collections not ported: newsletters (442 files), notes, books, findings, photos, projects.

Layouts not created: `study--newsletter`, `study--book`, `study--finding`, `study--photo`, `office`, `office--project`.

Feeds: none of the 3 feeds were ported.

The remaining links in `_links/` (~70 files) were not copied to `src/content/links/`.

### Assessment
More work than Option 1, but the Liquid template compatibility cuts the effort significantly vs. a full Nunjucks rewrite. The 442 newsletters are the most mechanical piece (collection setup — the files themselves don't need changes). Main risk is permalink fidelity; every URL must match exactly or feed subscribers and inbound links break.

---

## Build pipeline — regardless of which option

**Brunch should go either way.** It's functionally dead.

The CSS pipeline is simple: `@import` statements + CSS custom properties + autoprefixer + minify. No Sass/SCSS preprocessing. Replacement options in rough order of effort:

1. **`postcss-cli`** with a one-liner npm script — equivalent output, no config file needed beyond `package.json` scripts; works with either Jekyll or 11ty
2. **`styles.11ty.js` pattern** — eliminates a separate tool entirely; CSS processed as part of the site build (11ty only)
3. **No bundler at all** — modern browsers handle CSS `@import` and custom properties natively; you'd only lose minification

On `postcss-custom-properties`: this plugin transforms CSS custom properties into static values for old browser compatibility. Can be dropped — let browsers handle variables natively.

---

## Recommendation

**Fastest path to stopping vulnerability notices: Option 1.**
- Scope is well-defined: Ruby version, Gemfile, Brunch → postcss-cli, GitHub Actions
- Templates and content untouched
- Low risk

**To get off Ruby for long-term maintenance: Option 2.**
- More work, but eliminates the Ruby dependency entirely (Node-only stack)
- Templates can stay in Liquid, so it's not a full rewrite
- The old migration branch is more hindrance than help at this point — start fresh
- Critical: test every permalink before going live
