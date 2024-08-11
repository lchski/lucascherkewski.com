---
layout: study--newsletter
title: 'Usable (legible!) for computers'
number: '362'
date: '2024-08-11 16:48:00 -0400'
published: true
---

Earlier this week, a former colleague asked me for some links on spreadsheets, tabular data, and so on. I was surprised to discover I had some bookmarked, and put them in a post for future reference: “[Good spreadsheets](https://lucascherkewski.com/study/good-spreadsheets/)”.

A few spin-off thoughts on making things usable for computers:

- I think of this most often through the lens of “legibility” or “readability”—recently, I offered some colleagues the idea of “teaching computers to read”. When recording or structuring some data, we can ask ourselves “can a computer read this?” I often add a few caveats, like “a computer using commonly-available software with minimal-to-no coding intervention required”—in other words, a spreadsheet! It’s also good to then explore a bit the “so what” follow-up: “can a computer read this _in order to_ …”—your answer to that, the kinds of questions you want to be able to answer with the data, has a huge impact on how you then structure it.
- I waved my hand at this in the post, but making things usable for computers doesn’t always result in something that’s usable (or elegantly designed) for people. An example of this: a table of information designed for people to read might, when faced with repeated data, use ditto marks, leave blanks, or group the data under headings. But that’s not necessarily ideal for a computer—to enable counting or other aggregation on that data, you’d ideally repeat each value. (“Headings” for groups of data, when input manually into a spreadsheet, are a nightmare for data cleaning and analysis.)
- This leads to another guideline on making things readable for computers: make all your values _explicit_—even when it’s repetitive or harder to read for human eyes; this is the safest approach to making it usable _in a way that reflects what you actually mean_. But of course this depends on your goals: if you don’t need to roll up, aggregate, or compute the data somehow, but are just using a spreadsheet because it’s got a handy, flexible grid layout, you probably don’t need to worry about this—and that’s a totally valid way to use spreadsheets, too!

Anyhow! On to the links?

- Been working on a dataviz project using Observable recently, and the dataset was getting just a liiiiitle too big to performantly process using native JavaScript alone. Enter [DuckDB](https://duckdb.org), which has [a WebAssembly implementation that can run in-browser](https://github.com/duckdb/duckdb-wasm). DuckDB’s great power is its portability: the same SQL you run on a server works on the web. 
  
  If you’re more used to doing dataviz in R or Python, [José M. Zavala González transferred an R-based project to Observable using DuckDB, explaining the few differences along the way](https://observablehq.com/@jzavala-gonzalez/moving-analyses-to-the-web-using-observable-and-duckdb). [Danielle Navarro’s original write-up “How to visualise a billion rows of data in R with Apache Arrow” is also worth your time.](https://blog.djnavarro.net/posts/2022-08-23_visualising-a-billion-rows/)
  
  (Also, this explanation for [why DuckDB is free](https://duckdb.org/why_duckdb#free) is most excellent: “DuckDB's development started while the main developers were public servants in the Netherlands. We see it as our responsibility and duty to society to make the results of our work freely available to anyone in the Netherlands or elsewhere.”)

- [Jon Billing shared his and his wife’s experience searching for a house in Japan](https://www.bigsandwoodworking.com/tomobe-house/)—including loads of photos of the one they bought, with lots of attention to carpentry and woodworking details.

- [Interesting to see how much OpenAI is red-teaming (and publishing about its red-teaming) its latest models.](https://simonwillison.net/2024/Aug/8/gpt-4o-system-card/)

- [Jack Cheng wrote about the first days and weeks being a new father, including a delightful data tracking / visualization of his sleep (or lack thereof).](https://www.jackcheng.com/sunday/427-best-daze/)

- [Robin Sloan shared so many good links in his recent “Summer Reading” newsletter](https://www.robinsloan.com/newsletters/summer-reading/) that I’d be derelict in my duty of sharing what I’ve been reading not to pass them along. A few I’m looking forward to?
  - [*Frostbite*, by Nicola Twilley](https://www.penguinrandomhouse.com/books/551601/frostbite-by-nicola-twilley/) ([on which I shared a few links in issue #354](https://lucascherkewski.com/hit-and-miss/354-sharing-in-abundance/))
  - [*A Natural History of Empty Lots*, by Christopher Brown](https://www.hachettebookgroup.com/titles/christopher-brown/a-natural-history-of-empty-lots/9781643263366/) ([whose newsletter is excellent](https://fieldnotes.christopherbrown.com)!)
  - [“Oceans of Power and a Tincture of Reproof” by Dan Bouk](https://buttondown.com/danbouk/archive/oceans-of-power-and-a-tincture-of-reproof/) ([also linked to by Mita Williams in her newsletter yesterday](https://www.uofwinds.com/392/))
  - [“Embracing Sub-Optimal Relationships” from L.M. Sacasas’s _Convivial Society_](https://theconvivialsociety.substack.com/p/embracing-sub-optimal-relationships), on “how we are starved for personal relationships yet at every point sold impersonal substitutes” ([the footnote Sloan links to about “I” versus “we”](https://theconvivialsociety.substack.com/p/embracing-sub-optimal-relationships#footnote-1-144881428), reminded me of [an old issue of this newsletter thinking through my position on the same](https://lucascherkewski.com/hit-and-miss/78-i-you-we/); rereading, I’m glad to see it holds up! also, I used to do a lot more thinky-thinky in this space!)

Oooookay, I’m off to meal prep, glue up a lil cutting board (thankfully we’re not so pressed for cutting boards that it has to _precede_ the meal prepping), and catch up with family. WHOLESOMENESS! All the best for the week ahead!

Lucas