---
layout: study--newsletter
title: 'Doing our parts'
number: '237'
date: '2022-03-20 17:30:00'
published: true
---

It’s here—we’ve gone from “springlike” to “spring”, at least officially. There’s still snow on the ground, and ice in the rivers, but it’s melting quickly. Indeed, on this morning’s walk I saw [the ice breaker that’s a sure sign of spring in Ottawa](https://www.youtube.com/watch?v=P9qnZDfZCmU). (It’s not quite [an icebreaking hovercraft](https://www.cbc.ca/news/canada/montreal/coast-guard-hovercraft-flooding-1.5056869), but it’s neat nonetheless.)

In too many ways, it feels like [last year’s newsletter from around this time](https://lucascherkewski.com/hit-and-miss/185-spring-change-or-not/) still holds up:

> Yesterday was the first day of spring. I woke relatively early, layered up (these edge weeks are so odd—chilly mornings, “hot” afternoons), and ventured out, binoculars in hand. The birds are (coming) back, and I was glad to bear witness.
>
> …
> 
> It feels like we’re racing ahead. Toward, on the one hand, [as I wrote last week, a third wave here in Ontario](https://lucascherkewski.com/hit-and-miss/184-on-we-go/). Toward, on the other, genuinely brighter days ahead. (I mean, the days _will_ lengthen for a few months, so I suppose that’s not merely a metaphorical statement.)

With the lifting of mask mandates, [erosion of local control](https://toronto.ctvnews.ca/hamilton-school-board-can-t-go-ahead-with-plan-to-delay-lifting-of-mask-mandate-lecce-says-1.5825655), and “[stealth Omicron](https://www.theguardian.com/world/2022/jan/31/omicron-what-do-we-know-about-stealth-subvariant-ba2)”, it all feels like a “we’ve been here before” kind of situation. But never have folks been so on their own, particularly those at higher risk from the virus. Not to mention the pretty widespread, and poorly understood, risk of long COVID. Sigh. I have few words to share at this point—just a knowing nod of appreciation to those still doing their part to protect their community.

---

Tidbits from the past week!

- Inspired by Simon Willison, I’ve been getting back into web scraping.
	- Willison wrote up [a technique for “git scraping” combined with automatically publishing that data with datasette](https://simonwillison.net/2020/Jan/21/github-actions-cloud-run/), which I’ve been enthusiastically implementing since reading about it.
	- A first project for this was one with [access to information summaries, mirroring the open dataset and including older summaries](https://github.com/lchski/gc-ati-summaries-data). Thanks to the automatic publishing, you can [explore the summary data online](https://gc-ati-summaries-data.labs.lucascherkewski.com/) and [write and permalink custom SQL on that data (this URL gives a count of summaries by institution, by year, and updates whenever the underlying data updates)](https://gc-ati-summaries-data.labs.lucascherkewski.com/summaries?sql=select+owner_org_title%2C+year%2C+count%28request_number%29+as+n_summaries+from+summaries+group+by+owner_org_title%2C+year).
	- I then spent some time this weekend toying with various libraries to fill my [“personal data warehouse”, also thanks to Willison](https://simonwillison.net/2020/Nov/14/personal-data-warehouses/). Anyway, super cool. Great to be around scraping and cleaning data again.
- From yesterday’s _Globe and Mail_, and enabled by some dogged access to information requests, a [profile of Lester B. Pearson’s involvement in a high-profile instance of the RCMP Security Service’s obsession with gay public servants](https://www.theglobeandmail.com/canada/article-the-untold-story-of-how-lester-pearson-influenced-the-dubious-spy/). Yet another reminder of the difficult history of certain key institutions, a history that shapes and constrains them to this day. Being a public servant means, at times, grappling with the wide range of things government did and does—including the terrible.
- There’s a lot going on in this [post by Dan Luu, “Why is it so hard to buy things that work well?”](https://danluu.com/nothing-works/). I particularly enjoyed the commentary on how hard it is to find reliable information on what works well in a given market. For consumer goods, publications like _Wirecutter_ or its older competitor _Consumer Reports_, can level the field, but only to a point. Knowledge is hard, but especially so with the explosion of things to know about. (See also, people on Twitter flitting from being armchair experts on respiratory illnesses to no-fly zones and nuclear war to whatever comes next.)
- I decided to explore Ottawa from a different perspective this summer, and bought a bike. I’m excited! This has amplified my attentiveness to transportation infrastructure—where will I feel safest and most confident biking, as I get back into it—and [stories like the death of a cyclist at Donald and North River](https://twitter.com/ErikWdV/status/1505272694891171844) are painful reminders of the structural dangers our city has built for those outside of large vehicles. No more ghost bikes—let’s have safe streets for all.

All the best for the week ahead.

Lucas