---
layout: study--post
title: 'Good spreadsheets'
subtitle: 'Spreadsheetin’: making data usable for computers'
date: '2024-08-06 20:08:46 -0400'
categories:
published: true
---

A colleague from the CDS days recently asked for some good resources on spreadsheets / tabular data. I used to run “spreadsheetin’” sessions where I tried (through hands-on examples) to share some of the principles or practices I’ve stumbled into over the years.[^backstory] 

[^backstory]:
	At its core, I remember the advice boiled down to “don’t use column or row highlighting alone to convey meaning”, from which we can extrapolate a bunch of good practices. That to say, these principles and practices were hardly novel!
	
	Really, I’d been making so-so spreadsheets for years, then read [R for Data Science](https://r4ds.had.co.nz) years ago ([there’s a new version](https://r4ds.hadley.nz), cool!). Reading [the tidy data chapter](https://r4ds.had.co.nz/tidy-data.html) and applying the tidy philosophy clarified the better practices underpinning those so-so spreadsheets, and I started making better ones.


**Important fundamental assumption alert!** In assembling this assortment of links, I worked from this assumption: good spreadsheet / tabular data practices amount, at their core, to storing data in a way that’s usable for computers. That may not be the only purpose for good spreadsheets, of course, but I find it's a frequent and worthy one. (With the caveat that sometimes we make things less intuitively usable for _people_ by making data more immediately usable for _computers_, which is a tradeoff worth interrogating depending on the work at hand! See the end of the post for some links to readings on critical data studies.)

With that in mind:

- The best all-in-one resource that I have easily at hand are the free course materials for “[Data Organization in Spreadsheets for Social Scientists](https://datacarpentry.org/spreadsheets-socialsci/)”. It does a good job not assuming too much knowledge (though it maybe does take “spreadsheets” as a concept for granted; I don't really have a good resource for that, and welcome any recommendations for one!).
- [A good quick reference for what makes a good data / spreadsheet for computing / publication purposes](http://www.clean-sheet.org) (which may be different than day-to-day usability, admittedly!), sort of a best practices application of the ideas taught in that course. It leaves out the _why_, but definitely gives a good _how_.
- Covering similar ground as the previous two, but [from a more research management perspective, these “good enough practices” are truly that](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510#sec004). They may not include quite the level of explanation necessary for a first read for someone not versed in this stuff, but it’s good once they've read one or two other resources, I think. The description of “analysis-friendly data” aka “tidy data” (see next item!) is a really good quick summary of what makes a good / computable spreadsheet.
- A lot of these reference or indirectly explain the concept of [“tidy data”, which comes from a quite readable paper by Hadley Wickham](https://vita.had.co.nz/papers/tidy-data.pdf), who then went on to grow a whole ecosystem of data science tools around the tidy philosophy. It’s only mildly statistician-technical; the sections defining and applying tidy data (2 and 3 respectively) are the most of interest in this context.

From there, if you wanted to get more into applied data practices (using a scripting language), you could follow my path into [_R for Data Science_](https://r4ds.hadley.nz) and the [tidyverse](https://www.tidyverse.org), or, more recently, into working with [Observable notebooks](https://observablehq.com/documentation/notebooks/) ([check out trending notebooks](https://observablehq.com/trending) for examples of what they can do).

But good spreadsheets (and / or other forms of tabular data storage!) will get you far on your way.

***

**BONUS CONTENT!!**

If you’d like to interrogate the idea of data from a critical perspective (because who wouldn’t want to do that while gaining some practical skills!?), some good readings:

- [_“Raw Data” Is an Oxymoron_](https://direct.mit.edu/books/edited-volume/3992/Raw-Data-Is-an-Oxymoron), an open-access edited book, discusses the contrast between “raw” and “cooked” data in the introduction by Lisa Gitelman and Virginia Jackson.
- [Rob Kitchin’s brief summary of his book _Data Lives: How Data Are Made and Shape Our World_](https://www.transformingsociety.co.uk/2021/02/09/telling-data-stories-narrating-how-data-are-cooked-and-consumed/) carries on this metaphor, discussing the field of critical data studies.
- [Kitchin and Tracey Lauriault discuss the nature of data, and the influence of data infrastructure on data (and vice versa)](https://kitchin.org/wp-content/uploads/2019/04/DG-Ch-8-preprint.pdf) in a chapter in [the 2018 book _Digital Geographies_](https://uk.sagepub.com/en-gb/eur/digital-geographies/book258271#description). This is probably a good middle ground between the previous two (a whole book and a blog post), discussing many of the same concepts in an engaging way.