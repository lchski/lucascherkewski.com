---
layout: study--post
title: 'Readability troubles on Canada.ca'
subtitle: 'Two small ideas for improvement'
date: '2017-11-29 15:00:00 -0500'
categories:
published: true
---

{:h2: .f6 .ttu .tracked .mt5 .lh-title}
{:link: .dim .light-purple}
{:blockquote: .ml0 .pl4 .bl .bw3 .b--black-10 .f4}
{:blockquote__citation: .f5 .measure}
{:hr: .w-40 .mv5 .bw1 .ba .b--black-10}

The Treasury Board Secretariat within the Government of Canada just published the government’s [“Strategic Plan for Information Management and Information Technology 2017 to 2021”](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/strategic-plan-2017-2021.html){:link}. I haven’t read the whole thing, but in principle it seems sound. Many of the actions listed (either planned/underway) are definitely in the right direction, and I’m happy to see them.

The content of the document is not actually why I’m writing, though. I’m writing because the [GCWeb theme](https://github.com/wet-boew/GCWeb){:link} makes it unnecessarily difficult to read long-form content like this document.

Off the top of my head, there are two major problems:

1. *An unconstrained measure.* The content wraps the full width of my browser window; this makes for a (very rough) average measure of 160 characters, well beyond the [45–75 (ideally 66) character measure advocated by Bringhurst](http://webtypography.net/2.1.2){:link}.
2. *No internal navigation.* Beyond the table of contents at the start and occasional links to jump to the top, I’m left with only the option to scroll through one very long page.

Fixing the former can be done through the CSS `max-width` property. This has already [received some attention in the GCWeb GitHub](https://github.com/wet-boew/GCWeb/issues/1239){:link}, but the issue looks a bit stale.

The latter can be addressed in several ways: including more links to jump to the top (hardly ideal); including a floating table of contents that accompanies you as you scroll, or more more micro tables of content (somewhat better); splitting the sections of the document into their own pages, with a shared table of contents and links in between (more in the spirit of the web, though with drawbacks). I’m a fan of the third approach, especially because it’d easier to link to specific sections (this is currently possible, but requires going to them from the table of contents), but I understand that it may not be as practical as the other options.

I write this not out of despair but out of hope. It’s very exciting to see a modern design for Government of Canada websites, and especially to see great documents posted to it. I just wish the reader experience were a bit better considered.[^caveat]

[^caveat]: An important note: because [this theme is developed in the open](https://github.com/wet-boew/GCWeb){:link}, anyone can contribute to address these issues. Indeed, I hope to—this is a reminder for me about things that I could contribute.