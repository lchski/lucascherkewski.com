---
layout: study--post
title: "Stop hiding links"
subtitle: "We should celebrate the fundamental building block of the web"
date: 2016-09-11 16:15:00 -0400
---

{:h2: .f6 .ttu .tracked .mt5 .lh-title}
{:link: .dim .light-purple}
{:blockquote: .ml0 .pl4 .bl .bw3 .b--black-10 .f4}
{:blockquote__citation: .f5 .measure}

Picture it: You’re working on a web design project. Things are humming along well, until suddenly you hit it. That moment.
*Here I am again*, you think, *that painful point in any project—dealing with the links.*

You may know this moment well. Certainly, I’ve grappled with it quite a few times, and still do.

Browsers don’t help the issue much: the default link style is so garish, so brash, that we’re inclined to do something,
*anything*, to get it looking respectable.

This is the default link style: [Link to nowhere.](#){: #linkToNowhere} It’s quite harsh.

<script type="text/javascript">
	document.getElementById('linkToNowhere').href = '#' + Date.now();
</script>

Unfortunately, our occasional inclination is to style links almost to the point of invisibility. We do this by muting the
colours, bringing them much closer to that of the text, or by removing the underlines. There are any number of modifications
that we make when it comes to links. It’s probably just an extreme reaction to the scary default style, but it’s worth questioning.

## Accessibility
{:h2}

The first, most obvious, and most important reason to make links visible is for accessibility reasons.

Different people have differeng levels of sight: some can discern the whole spectrum of colour with ease, some
have difficulty discerning between specific shades, and some are severely limited in the ability to see colour. (This to
say nothing of non-sighted individuals; make sure you’re using proper markup from the start to help those with screen
readers.)

Jarring though it is, the default browser style has two qualities that make it extremely visible that the content is a link:
a bright blue colour, with high contrast both against the default white background and amongst the default black text;
and an underline, to help those with greater difficulty in discerning colours. These two qualities *ensure* that the link will stand out
and be noticed.

WebAIM puts it best:

> Links should look like links, and nothing else should. Users may get frustrated if they try to click on textual phrases or graphics that look like links but are not. They will also be frustrated if they have to move their mouse all over the page trying to discover links that do not look like links.
> {: .measure}
> <cite>WebAIM, [“Link Text and Appearance”](http://webaim.org/techniques/hypertext/link_text#appearance){:link}, *Links and Hypertext*</cite>
> {:blockquote__citation}
{:blockquote}

Do not frustrate the people using your design. They’re people, just like you and I, and they deserve your respect.

## Building the web
{:h2}

Though it should be sufficient, if the accessibility argument isn’t enough, consider one about the spirit of the Internet.
Links are the fundamental building block of the web. They’re *meaningful*. They carry weight. (With Google, literally
so.) We have links to thank for a huge part of the web’s success, and its power: with links, we construct the connections
that make the web’s potential for disseminating information so potent.

Links are so fundamental, Jeremy Keith delivered a whole keynote on them ([*&lt;A&gt;*](https://adactio.com/articles/10887){:link}).
In it, he speaks of the `<a>` tag’s history, and he uses the link as a model to explain how the Internet itself grew and changed to
reach where it is today. The whole piece is engaging—certainly worth a read—but this part in particular is highly relevant:

> The Garden of Forking Paths. It is uncontrolled. It is full of possibilities. It’s a bit scary. It takes more dedication to explore. You might get lost. But is that so bad? When was the last time you were truly lost on the World Wide Web, when you clicked through link after link—no cheating by opening new tabs, now—until you ended up somewhere, blinking and asking yourself “what I was looking for?”
> {: .measure}
> I would like us all to spend more time in the garden of forking paths. I would like us all to continue to grow this garden of forking paths. Add your own website to this garden of forking paths. Use it to make more links.
> {: .measure}
> <cite>Jeremy Keith, [*&lt;A&gt;*](https://adactio.com/articles/10887){:link}</cite>
> {:blockquote__citation}
{:blockquote}

With links—big, bold, beautiful, obvious links—we shout our participation in this Garden of Forking Paths. We position
ourselves within the huge network that is the web, capitalizing on the relative instead of hierarchical organisation that
it fosters. We shouldn’t be ashamed of our links, styling them to near-invisibility. We should embrace them, styling
them to be obvious.

Links are the foundation of the web. Go make some—then display them proudly.
