---
title: nationalarchives-gov-uk philip-clegg 120-tb-web-archive
link: >-
  https://blog.nationalarchives.gov.uk/blog/move-120-tb-web-archive-cloud-two-weeks/
link_title: How to move a 120 TB web archive to the cloud in two weeks
source: >-
  via Library and Archives Canada’s [_Governance and Recordkeeping Around The
  World_ January 2019
  issue](https://www.bac-lac.gc.ca/eng/about-us/publications/governance-recordkeeping-world/Pages/2019/January2019.aspx)
date: 2019-01-12T21:58:17.401Z
published: true
---
The UK’s National Archives transferred its 1.4 billion document, 120 TB Government Web Archive to the cloud—in two weeks.

> With this ensemble of 72 hard drives, two custom-built PCs and two AWS Snowballs, the entire process took just two weeks – not bad for more than two decades of internet history!

A great explanation of the benefits of cloud storage:

> Cloud can also make web-based services faster and more reliable. Put in the simplest terms, physical hardware – like servers and hard drives – can be overloaded or fail. Cloud infrastructure, on the other-hand, tends to have a higher level of redundancy built-in – so if there’s ever a problem with a hard drive, server or even data centre, your services can simply be resumed elsewhere with minimal disruption.

Sometimes (usually) the right approach is a combination of building your own tools and using powerful open source libraries:

> We struggled to find an existing tool that would meet our specific need for indexing a large number of small files, so we built something called WarpPipe. This allowed us to index all The National Archives’ documents in just ten hours – far below the timeframe of six to eight weeks we were told it would take with one of the most popular big data processing tools.
>
> The search functionality itself is provided by Elasticsearch, which substantially improves on The National Archives’ previous search engine in terms of speed, flexibility and reliability. We now update the index once a month rather than once a quarter, for example, so it’s much faster for new archive content to show up in search results.
