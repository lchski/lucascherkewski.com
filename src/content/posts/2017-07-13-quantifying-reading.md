---
layout: study--post
title: 'Quantifying reading'
subtitle: 'What Goodreads can teach us about databases and shared understanding'
date: '2017-07-13 17:00:00 -0400'
categories: reading-writing days-of-data
published: true
---

{:link: .dim .light-purple}
{:blockquote: .ml0 .pl4 .bl .bw3 .b--black-10 .f4}
{:blockquote__citation: .f5 .measure}

In writing about [Manguel’s suggestion that a book is never truly finished](/study/left-unfinished/){:link},
I was reminded of some recent thoughts about databases, social networks, and Goodreads.

Goodreads is a social network for readers. It uses a vast database to
help readers track the books that interest them, the books they’re reading, and the books
they’ve read. It also permits readers to peek into the lives of fellow readers: to see
what their friends are reading and what they think of those books.

I want to discuss two of Goodreads’s features in particular:

* While reading a book, you can track your progress through its pages, providing
  updates as you go[^obsessive-updating]
* Once finished a book, you can provide a star review out of five[^text-reviews]

In tracking page progress, how does Goodreads account for the way Manguel might read a book, picking it up now
and returning to it much later—or perhaps never? How does it account for the reader who might never
feel as if they’ve finished a book?

In tracking stars reviews, other problems arise. My four stars might be equal to your three stars. You might
have a principled system in providing reviews, while mine might be quite inconsistent. Ultimately these numbers
are aggregated and a book receives its star count. When aggregating those numbers, how does Goodreads account
for the different ways that people use star reviews?

It doesn’t, of course. These are the constraints of the database: by fitting ourselves into common columns, we
pretend to a common comprehension of what those columns mean. There’s nothing necessarily *wrong* about this,
but it’s an oft unacknowledged truth in our quest for quantification. The values you provide may mean different
things for you than for I, yet they sit in the same system. Ultimately, we’re bound by the system’s schema, by its
way of understanding the world.

In exchange for the convenience of sharing within an environment like Goodreads, we’re bound to share on its terms.
For many—myself included—that’s an acceptable tradeoff. But it’s worth questioning.

[^obsessive-updating]: I do this pretty obsessively, at least in terms of tracking my page count progress.
	Whenever I finish a reading session, I immediately note my progress in Goodreads, creating a point in my
	dataset to later refer back to. Imagine what’d happen if I didn’t provide an update! I’d have an incomplete
	dataset—simply unacceptable! (The kicker, of course, is that I never refer back to these datasets.)

[^text-reviews]: You can also provide text reviews, which sidestep somewhat the problem of assuming shared
	understanding: by writing your thoughts out with words, people are less likely to misinterpret.
