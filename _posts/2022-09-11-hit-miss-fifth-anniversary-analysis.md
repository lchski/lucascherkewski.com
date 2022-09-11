---
layout: study--post
title: '_Hit and Miss_ fifth anniversary data analysis'
subtitle: 'Because aside from writing a weekly newsletter, my hobbies include analysing data, especially my own'
date: '2022-09-11 15:30:00 -0400'
categories:
published: true
---

For the [fifth anniversary of _Hit and Miss_](https://lucascherkewski.com/hit-and-miss/262-five-years-thank-you/), I took the archive as a corpus and [did some analysis](https://github.com/lchski/hit-and-miss-analysis). (The corpus excludes the fifth anniversary issue, just to be clear!)

## Links

A key part of the newsletter is the links. (You can [check out the analysis code for this section](https://github.com/lchski/hit-and-miss-analysis/blob/main/analysis/2022-09-11-fifth-anniversary-linktrospective.R). No fancy RMarkdown, though, I’m not there yet!) There were many: 1,546 links in 261 issues. These include 1,416 distinct links:

- [`tinyletter.com/UniversityOfWinds`](https://tinyletter.com/UniversityOfWinds), [`digital.canada.ca`](https://digital.canada.ca/), and [`lucascherkewski.com/study/franklin-definitions/`](https://lucascherkewski.com/study/franklin-definitions/) were the most common, each appearing about 6 times. This makes sense! I really admire Mita Williams’s newsletter—and recommend you subscribe, but it has no public archive, so I only ever link to the subscription page; CDS is where I work, and I need to wave at that sometimes; Ursula Franklin’s set of pacifist definitions continue to push me to pause and consider.
- [`lucascherkewski.com`](https://lucascherkewski.com/) was the most common domain, unsurprisingly, appearing 161 times. Twitter (157), CBC (58), _The Globe and Mail_ (50) all follow (I have a hunch that links to the Globe started going up after I subscribed in the fall of 2020).
- [`aworkinglibrary.com`](https://aworkinglibrary.com/) was the 6th most common domain (tied with GitHub and YouTube)—but notable for being the most common personal / non-institutional domain. No surprise, as Mandy’s writing is a huge inspiration for what I try to do with my newsletter.

Almost every issue has links. Only 5% of issues—13 of 261—had no links:

- Interestingly, 10 of those 13 link-less issues were in the first 100 issues (first 2 years) of the newsletter, and it’s now been over a year since I sent [an issue without links](https://lucascherkewski.com/hit-and-miss/199-loading/) (though, amusingly, it noted that “I’ve accumulated a fair number of links to share, but they’ll have to wait for next week”). This suggests that earlier issues were more likely to deal exclusively with my offline reading and thinking, while later issues more consistently include a link.
- If we take out newsletters that only had “selflinks” (i.e., the only links in the newsletters were to a page on my website, like another issue of the newsletter), this number grows to 8% of issues, or 22 of 261. [Issue 219, “Silent commemoration” is a good example of selflinking](https://lucascherkewski.com/hit-and-miss/219-silent-commemoration/), with links only to pages on my site and a previous issue.

The number of links varies pretty significantly from issue to issue!

- 4 (2%) have more than 20 distinct links. 46 (17%) have 10 or more, while 147 (56%) have 5 or more.
- The “super linked” issues include: [135, “Personal websites”](https://lucascherkewski.com/hit-and-miss/135-personal-websites/); [145, “Who’s watching?”](https://lucascherkewski.com/hit-and-miss/145-whos-watching/); [225, “A few books feed us well”](https://lucascherkewski.com/hit-and-miss/225-a-few-books-feed-well/); and [62, “Blogroll”](https://lucascherkewski.com/hit-and-miss/62-blogroll/) (superseded now by [my site’s blogroll](https://lucascherkewski.com/rolls/)).

## Words

The other key part of the newsletter is its words! (You can [check out the word analysis code](https://github.com/lchski/hit-and-miss-analysis/blob/main/analysis/2022-09-11-fifth-anniversary-words.R)!) In the interest of time, I haven’t done a _full_ analysis, but some interesting observations:

- The 261 issues contain 120,575 words. That’s a decent book!
- On average, there were 462 words per newsletter, but that varied pretty dramatically. [The wordiest issue (a write-up of a research project)](https://lucascherkewski.com/hit-and-miss/63-laurel-creek-conservation-area/) was 1,817 words. [The briefest (saying I was taking a break that week for family time)](https://lucascherkewski.com/hit-and-miss/57-thanksgiving-break/) was a mere 34.
- Five issues had more than 1,000 words (my apologies!):
	- [63: “Competing priorities at Laurel Creek Conservation Area”](https://lucascherkewski.com/hit-and-miss/63-laurel-creek-conservation-area/) (1,817)
	- [1: “Earthworming”](https://lucascherkewski.com/hit-and-miss/1-earthworming/) (1,502)
	- [252: “Broken social scene—wait, I mean, contract”](https://lucascherkewski.com/hit-and-miss/252-broken-social-contract/) (1,316)
	- [231: “Acoustic assaults”](https://lucascherkewski.com/hit-and-miss/231-acoustic-assaults/) (1,164)
	- [229: “Playing for team public”](https://lucascherkewski.com/hit-and-miss/229-playing-team-public/) (1,084)
- Four had fewer than 100:
	- [151: “Some links”](https://lucascherkewski.com/hit-and-miss/151-links/) (88) [five links in 88 words, wow!]
	- [199: “Loading”](https://lucascherkewski.com/hit-and-miss/199-loading/) (72)
	- [147: “One link to listen”](https://lucascherkewski.com/hit-and-miss/147-one-link-listen/) (42)
	- [57: “Thanksgiving break”](https://lucascherkewski.com/hit-and-miss/57-thanksgiving-break/) (34)
- Removing common words (“stopwords”), some frequent words appear:
	- “week” emerges is one of the most frequent, appearing 548 times. This makes a lot of sense, as the newsletter is very explicitly about… what I did / read / thought that week! (It helps, I suppose, that I end almost every issue with “All the best for the week ahead!”)
	- “ottawa” appears 155 times—a love for where I live, hopefully clear in my writing.
	- “government”, 138 times—it matters!
	- “friends”, 127 times—smiles :)
	- “data” 119 times, “history” 110, “library” 92, “walk” 85—all good examples of my interests, clearly on display.
	- “covid” 64 times, “pandemic” 40, “vaccine” 7 (and in plural form, 5) “lockdown” 4, “booster” 1 (despite having two boosters)

There’s more I could do for a proper text analysis (TF-IDF, clustering, [topic models](https://his3305.labs.lucascherkewski.com/), etc), but we’ll leave that “for future study”. :)