---
layout: study--newsletter
title: 'Transcripting'
number: '273'
date: '2022-11-27 20:00:00'
published: true
---

Hello!

I spent much of the weekend working on a civic tech project, so I haven’t got much juice left to write in-depth here.

The project is a [web version of testimony presented at the Public Order Emergency Commission (POEC)](https://poec-explorer.labs.lucascherkewski.com/), variously known as the “Emergencies Act Inquiry”, “Convoy Inquiry”—you know the one. I’ve written in past weeks about the [interesting documents the POEC is surfacing](https://lucascherkewski.com/hit-and-miss/268-convo-dump/), but didn’t realize until late this week that there are verbatim transcripts posted as PDFs after each day of testimony. ([See, for example, the transcript from the last day of testimony, with the prime minister as witness.](https://publicorderemergencycommission.ca/files/documents/Transcripts/POEC-Public-Hearings-Volume-31-November-25-2022.pdf))

They’re great! They’re thorough, well-structured, and machine-readable. (The first and second attribute is great for anyone; the second and third attributes made this project possible.) Court reporters (stenographers, in other parlance) are really good at what they do. Transcripts are very helpful: not everyone can or wants to listen or watch a long video of a hearing; you can’t easily search a video; and so on.

As good as these are, though, I realized in using them a few ways they could be easier to use:

- line numbers are included as text, so sentences and paragraphs are frequently interrupted by a number (making listening to the transcript or copy / pasting out of it a bit awkward)
- speaker information is integrated directly into the text, but title and affiliation is sometimes hard to find (sending you either to the witness list, the frontmatter, or the testimony itself)
- PDFs, while great for reproducibility and assurance, aren’t the best for consuming from a data or searching perspective

So, I wrote some [code that converts the PDF transcripts into well-structured data](https://github.com/lchski/poec-analysis) ([massive spreadsheets](https://github.com/lchski/poec-explorer/tree/main/src/_data/testimony), essentially), doing some standardization of names and such in the process. Then, I wrote some more [code that displays that transcript data as the website linked above](https://github.com/lchski/poec-explorer). It was great fun!

You’re getting a bit of a preview, so, if you can, hold off on sharing this around too widely for now—I want to write to the POEC folks to confirm they’re good with my doing this, or to see if there are any extra disclaimers or caveats they’d like included.

Civic tech isn’t about outrunning public institutions. At its best, it’s about working together with them to meld their unique offering with even better public good. I… definitely did run ahead a bit here, but I think reasonably so, in the circumstances.

I also hope this can be a bit of a model of how documents like transcripts can be seen as structured data *and* be displayed in a more compelling, accessible (in all senses of the term) manner. There’s still some [bugs to fix, minor features in the backlog](https://github.com/lchski/poec-explorer/issues), and major potential for extra analysis. Happy to hear any and all feedback, ideas, questions, and so on!

Before I head off and rest my eyes for the evening (T’s come home from work and Arthur’s clambered into my lap, both signs it’s time to sign off), one cool link: [an interview on the legacy of Corita Kent, at _The Great Discontent_](https://thegreatdiscontent.com/interview/corita-kent/). [Austin Kleon has often posted about Kent](https://austinkleon.com/tag/corita-kent/)—I’m always glad when I take the chance to learn more about her.

All the best for the week ahead!

Lucas