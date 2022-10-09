---
layout: study--post
title: ''
subtitle: ''
date: '2022-08-31 20:04:03 -0400'
categories:
published: true
---

Consider the [US government’s IT Dashboard](https://www.itdashboard.gov/) (all information available government-wide and agency-specific):

- [data on spending, initiative health / risk, and schedule and cost variance](https://www.itdashboard.gov/itportfoliodashboard)
- [detailed information on data centres](https://www.itdashboard.gov/data-center-v2), if that floats your boat, including % uptime data

Some high-level info—not bad! But wait, those high-level stats are just summaries of more granular data:

- [“investments”, which seem to be a mix of ongoing activities and more limited projects](https://www.itdashboard.gov/investment-details)
- [“documents”, which seem to include a huge array of supporting documentation for said investments](https://www.itdashboard.gov/document-search)
- [the actual underlying datasets, including info on each agency’s overall IT portfolio, details on its investments, _and details on its specific projects, including specific project activities_](https://www.itdashboard.gov/data-feeds) ([see the ”Data Feeds” FAQ for descriptions of all the information available](https://www.itdashboard.gov/faq)—or download some of the datasets to understand the level of detail we’re talking)

As an example, you can learn about the [Department of Transportation’s Voice Switching and Control System Sustainment initiative](https://www.itdashboard.gov/investment-details/021-147277724). That example (which admittedly seems a pretty detailed one—not all are as filled out!) includes details on 9 different projects, a risk rating, and _links to associated contracts on USAspending.gov_. (Though I’ll note the contract connection doesn’t always seem to work—it just searches for the reference ID, which seems to turn up thousands of results.) There’s also an [HTML version of the initiative’s business case](https://www.itdashboard.gov/investment-business-case/021-147277724), if you’re interested (it’s mostly structured data—interesting!).

With only a bit of clicking around, we can see summary- and detail-level information on US federal IT spending, government-wide and agency-specific, right down to how specific projects are going and the contracts associated with them. And we can download the underlying data, in excellent structured format, to explore and analyse further ourselves.

---

Consider the Canadian equivalents:

- A few years ago, [one year’s worth of department-level IT expenditure summary data was released to a parliamentary committee](https://www.ourcommons.ca/content/Committee/431/OGGO/WebDoc/WD10815068/431_OGGO_reldoc_PDF/TreasuryBoardSecretariat-2-e.pdf).[^OGGO]
- [A civic tech project has converted a few parliamentary questions on IT projects into a dataset and website.](https://large-government-of-canada-it-projects.github.io/)
- Briefing binders for the [President of the Treasury Board](https://www.canada.ca/en/treasury-board-secretariat/corporate/transparency/briefing-book-president-treasury-board-canada/tb-tbs-101-materials-transition-2021.html#toc10) and [Chief Information Officer](https://www.canada.ca/en/treasury-board-secretariat/corporate/transparency/briefing-book-president-treasury-board-canada/cio-transition-binder-july-21-2021.html) (prepared / updated when new people occupy those positions) include some high-level information, and occasional examples.
- [Contracts over $10,000 are proactively disclosed](https://search.open.canada.ca/en/ct/)—you could filter through to find IT or IT-adjacent ones, though it’ll be hard to link them to a specific project or initiative.
- ...?

The common thread between these is that the information was either _requested specifically_ or _disclosed incidentally_ (as a general proactive disclosure requirement). There’s no way to connect projects to contracts, nor even is there an official list of projects—nor can you figure out IT spending at the departmental level.

---

I’m sure my American friends in the space could quickly critique and caveat the data shared by their government. Those closest to it naturally understand its limitations much better than a flyby observer.

- different political culture, too: don't trust government, vs do trust governemnt [Aaron budget 2019 anecdote]


[^OGGO]: How do you find this? I’m glad you asked. First, you’ll need to know that [the Standing Committee on Government Operations and Estimates met on February 27, 2020](https://www.ourcommons.ca/Committees/en/OGGO/StudyActivity?studyActivityId=10769410) to consider “Supplementary Estimates (B), 2019-20: Vote 1B under Department of Public Works and Government Services, Votes 1B and 5B under Shared Services Canada and Vote 1B under Treasury Board Secretariat”. Next, you’d need to know that about an hour into the meeting, [a committee member asked for a copy of the yearly IT expenditure reports](https://www.ourcommons.ca/DocumentViewer/en/43-1/OGGO/meeting-3/evidence#Int-10786010). Then, you’d have to find the small “Related Information” section on the meeting page, which includes links to “[Written Response from the Treasury Board Secretariat related to the meeting of Thursday, February 27, 2020](https://www.ourcommons.ca/DocumentViewer/en/43-1/OGGO/related-document/10815067)” and “[Written Response from the Treasury Board Secretariat related to the meeting of Thursday, February 27, 2020 - Appendix](https://www.ourcommons.ca/DocumentViewer/en/43-1/OGGO/related-document/10815068)”. Finally, if you clicked through to the PDFs linked on those pages, you’d find respectively the [relevant excerpts of the testimony](https://www.ourcommons.ca/content/Committee/431/OGGO/WebDoc/WD10815067/431_OGGO_reldoc_PDF/TreasuryBoardSecretariat-1-e.pdf) and the [actual IT expenditure reports](https://www.ourcommons.ca/content/Committee/431/OGGO/WebDoc/WD10815068/431_OGGO_reldoc_PDF/TreasuryBoardSecretariat-2-e.pdf). Of course, it’d be a PDF printout of what seems to be an Excel doc, but, y’know.


