---
layout: study--newsletter
title: 'SQL, community, and cool stuff'
number: '364'
date: '2024-08-25 13:09:18 -0400'
published: true
---

Hello!

My post-lunch food coma is settling in, and I’ve already spent muuuuuch too long on the computer plugging away at a data project today. So, links!

- For this project, I’ve moved my data loading / cleaning / tabulating to a proper SQL database (instead of an R project that outputs the data, or working entirely with JS in browser). That’s required brushing off my rather shaky SQL, but well worth it. A handy reference has been [Julia Evans’s “SQL queries don’t start with SELECT”](https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/), capturing the “run order” (more or less) of SQL queries (which matters because the earlier steps dictate what you can reference in later steps).
- Inspired by [Simon Willison, who frequently shares his efforts with “ai-assisted-programming”](https://simonwillison.net/tags/ai-assisted-programming/), I used the [Claude 3.5 Sonnet model](https://www.anthropic.com/claude) to describe (in very plain, sleep-deprived language) what I was trying to do, using the actual column and table names in my data. The resulting queries—and, even more helpfully, _explanations_—worked great to help my brain remap itself from R/JS approaches to data wrangling. (Giving the column / table names also allowed the model to infer / guess at properties inherent to the data, like guessing that latitude and longitude might accompany a certain type of data I had. Neat!)
- Being on Juia Evans’s site, I browsed around, since the extensive backlog of posts is _so good_. I stumbled upon the post ‘[Some good "Statistics for programmers" resources](https://jvns.ca/blog/2017/04/17/statistics-for-programmers/)’ which introduced me to the idea of [nonparametric statistics](https://en.wikipedia.org/wiki/Nonparametric_statistics) and wow, this is a concept I really appreciate! Making sense of the assumptions that underpin conventional statistics has always been really hard for me, a stumbling block on my way to understanding and applying stats. I get that nonparametric stats is also underpinned by certain fundamental assumptions, but it feels a little easier to use even if the math under those assumptions still feels a bit beyond me.
- Last weekend, [Frostapalooza](https://frostapalooza.bradfrost.com) happened, celebrating [Brad Frost](https://bradfrost.com)’s 40th with an epic party. [The announcement a year ago gives a sense of what it’s about](https://bradfrost.com/blog/post/frostapalooza/) (“an unabashed celebration of life, of joy, of fun, of friendship, of family, of music, of creativity, of expression”), but so do some of the posts that’ve come out since: [Jeremy Keith](https://adactio.com/journal/21355) (and [Brad’s reaction to Jeremy’s post](https://bradfrost.com/blog/link/adactio-journal-frostapalooza/)); [Chris Coyier](https://chriscoyier.net/2024/08/23/frostapalooza-2/); and [Brad’s own “in photos and videos”](https://bradfrost.com/blog/post/frostapalooza-in-photos-and-videos/). I’ve been delightfully reading and bookmarking these because they’re a beautiful example of community and _fun_—we could all use some more joy in our lives, and Brad’s family and community have definitely shown a way.
- [This idea of “third things” as communications facilitators is very relatable.](https://kottke.org/24/08/third-things-can-make-communication-easier) I’ve noticed I know less and less where to put my eyes when talking one-on-one these days; walking or doing something else helps!
- Ross has followed up his [post on public backlogs and roadmaps](https://public.digital/pd-insights/blog/2024/07/filling-in-the-gaps-the-case-for-public-backlogs-roadmaps) with [a public tracker listing ones from public sector / charity / community-interest orgs](https://www.publicbackroads.xyz). Neat to see the wide range of approaches people take to these.

Ooookay, time to rest (j/k, work on a woodworking project)—all the best for the week ahead!

Lucas