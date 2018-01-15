---
layout: office--project
title: "uOttawa library"
subtitle: "Making it easier to access library resources and responding to collection cuts"
date: 2016-12-15 00:00:00 -0400
published: true
---

{:h2: .f6 .ttu .tracked .mt5 .lh-title}
{:link: .dim .light-purple}
{:blockquote: .ml0 .pl4 .bl .bw3 .b--black-10 .f4}
{:blockquote__citation: .f5 .measure}
{:hr: .w-40 .mv5 .bw1 .ba .b--black-10}

My university library offers a wealth of resources. I wanted to make them easier to access and
help others understand the risk posed by budget cuts.
{: .f2}

uOttawa, like many university libraries, offers cardholders access to subscription resources from home via
a proxy URL. The standard way to access such resources is to use the library search engine, finding the
resource in question, and clicking an “online access” link. If you’re not on the university network, you’re
directed to a login screen, after which you can access the resource as if you were on campus.

This process works pretty well, unless you want to use a search engine other than the library’s. If I’m at
home using Google to find scholarly articles, I have to copy/paste the titles of each interesting article
into the library search engine, then use the online access link to see a non-paywalled version.

I realized that this online access link linked to the standard URL for the resource, with `.proxy.bib.uottawa.ca`
appended to the end. This could be easily automated, I thought, and so I built [a small bookmarklet](https://github.com/lchski/uo-library-redirect-bookmarklet){:link}
for my use. Now I can use a standard search engine like Google and whenever I encounter a paywalled resource,
I just click the bookmarklet and immediately access the proxied version.

***
{:hr}

In my first year of university, the library was facing [a budget cut that would affect collections, notably
digital subscriptions](http://biblio.uottawa.ca/en/news/collections-update-september-2016){:link}. I saw that
thousands of journals were going to be cut, but I didn’t think much of it. I didn’t have a strong grasp
on the value of academic journals.

It wasn’t until a month later when, returning to the list of to-be-cut journals, I saw a journal I’d just used
in a paper. The article had offered me a critical perspective that I hadn’t found elsewhere; after the journal
cuts, I wouldn’t be able to access that perspective. I realized that I needed a way to visualize these cuts.

I built [a Chrome extension](https://github.com/lchski/uo-library-extension){:link} that highlights in red all the
search results from academic journals on the cut list. It works for both the uOttawa library and Google Scholar
search engines.

The happy ending to this story is that [the library didn’t cut much of the list](http://biblio.uottawa.ca/en/news/library-cost-reduction-strategy-update-0){:link}.
My extension didn’t have much to do with that (though I did demo it with a university librarian), but its
visualization helped me realize how crucial many of these journals were to the research I was doing.
