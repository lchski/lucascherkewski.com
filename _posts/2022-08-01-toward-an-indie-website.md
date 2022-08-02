---
layout: study--post
title: 'Toward an indie web(site)'
subtitle: 'Roadmap (ish—I’m not a PM) of changes to make this site more IndieWeb'
date: '2022-08-01 21:17:03 -0400'
categories: indie-web
published: true
---

Just merged [a change to automate posting bookmarks / links to this site](https://github.com/lchski/lucascherkewski.com/pull/32).

It’s long-neglected, so you may not know it, but [this site has a Links section](https://lucascherkewski.com/links/).
[I first mentioned the links section (and my excitement over it) in 2018](https://lucascherkewski.com/hit-and-miss/68-reading-writing-healing/),
and kept up with it for… about three months. Which is fine, life happens.

But, the thing is, I hadn’t stopped reading—or even annotating—links, in all that time!

I just didn’t have an elegant way to make the link posts.
I’d set up [Netlify CMS](https://www.netlifycms.org/), which helped a bit, but it still felt too friction-y to do
smoothly from my phone, which is where I do much of my link reading.

A few months ago, though, I learned about [Git scraping with GitHub Actions from Simon Willison](https://simonwillison.net/2020/Oct/9/git-scraping/). This unlocked a flurry of excitement in my brain, as I started to recognize the potential of GitHub Actions for automating updates to a git repository. At first, this meant [building scrapers for data of interest](https://github.com/lchski?tab=repositories&q=git-scraping&type=&language=&sort=), but it’s more recently grown into, “Oh wait, I can keep my beloved flat-file website _while also_ posting to it more or less automatically.”

Today’s change is my first step in that direction.

You see, I’d been saving and annotating links in [Pinboard](https://pinboard.in) since (and long before, really) that 2018 addition of my Links section. Now, links I save there (with the tag `to-link`) will be automatically cross-posted here. I can also add an annotation (notes I add in Pinboard remain private by default; it’s only content within a special wrapper that gets copied here).

Next up for this:

- figure out a way to encode the “via” data I sometimes add ([see, e.g., a link from early 2021](https://lucascherkewski.com/links/2021/01/15/13-49-2020game/))
- re-template the Links section to elegantly handle links without annotations (and update the script to actually post those—currently they’re saved as `published: false`)
- fix up the Links section a bit, inspired by [bookmarkers](https://indieweb.org/bookmark) like [Jeremy Keith](https://adactio.com/links), [Andy Baio](https://waxy.org/), [Simon Willison](https://simonwillison.net/), and more

---

This is just one example toward a more [IndieWeb](https://indieweb.org/) site, which has long been the dream. (My first bookmark tagged `indie-web` in Pinboard was saved in 2017—it’s been on my mind for a while.)

Other related dreams / ideas:

- tweets live here first, then get [syndicated (POSSE-style)](https://indieweb.org/POSSE) to Twitter ([Paul Robert Lloyd is a good example](https://paulrobertlloyd.com/notes/))
- book data moves here from Goodreads
- photos move here from Instagram
- maybe I start sharing interesting walks (using fitness tracker data, ish)
- open this site to webmentions and so on
- finish [last year’s move from Jekyll to Eleventy](https://github.com/lchski/lucascherkewski.com/tree/jekyll-to-eleventy), for speedier builds (and a more sensible file structure)
- [various other ideas tracked as `indie-web` in my site’s repository](https://github.com/lchski/lucascherkewski.com/issues?q=is%3Aissue+is%3Aopen+label%3Aindie-web)

GitHub Actions can help with the stitching, as today’s change shows. I’m also keen to explore [IndieKit](https://getindiekit.com/), which seems a helpful bridge.

Most important to me, though, is to keep the site as a flat file site—it’s the easiest to backup, move, rebuild, and so on. Long live flat files. Long life, too, to an indie-er web.
