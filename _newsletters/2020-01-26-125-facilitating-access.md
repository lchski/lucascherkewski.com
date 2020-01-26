Some friends recently asked me what my “grand plan” was, what I planned to do—as if I have a plan! I responded that I have no clear sense of job titles or positions that I’d like to occupy. Instead, I know the kind of role I’d like to play, what I’d like to be for other people: a trusted advisor, someone who brings disparate or unexpected information together in a usable way.

I’m writing this from one of my favourite spots, a library. To me, libraries are institutional versions of that role. They’re repositories of knowledge, the stacks of books wells of information from which to draw when learning about and reflecting on the world. (They’re also much more than what’s “in the stacks”, as [Ottawa’s Central Library project demonstrates](https://inspire555.ca/library-archives-spaces/).)

An abstract description of a role is a nice starting point, but how might I put it into practice?

In many ways, I already play this role through my day job. (Or, at least, I hope I do!) I get to advise on specific initiatives and on more general questions of direction. Sometimes that advice comes in the form of words, other times as action. (We can advise through action by pitching in where we think important, and holding back on things we think less so—and by speaking up about those decisions.)

But work can’t be the whole thing. So I’ve started thinking more intentionally about fulfilling this role through my current pastime, playing with government datasets. (I assure you, this differs from my day job!)

If you [scroll through my GitHub profile](https://github.com/lchski?tab=repositories), you’ll [see a host of repositories suffixed `-analysis`](https://github.com/lchski?utf8=%E2%9C%93&tab=repositories&q=-analysis). These include projects looking at the: [Social Sciences and Humanities Research Council (SSHRC) awards](https://github.com/lchski/sshrc-awards-analysis), [Government of Canada Public Accounts](https://github.com/lchski/public-accounts-analysis), [Public Service Employee Survey results](https://github.com/lchski/pses-analysis). There’s also one on [Canadian parliamentarians](https://github.com/lchski/parliamentarians-analysis), which I’ve alluded to before. (And plan to describe more in-depth in the future.)

These are all datasets I’ve come across for one reason or another, usually to answer some specific question. That grows into a more general curiosity as I start exploring the data, learning both the schema (what variables/columns are in the dataset) and the scope (how granular the observations/rows are). For many of these public datasets, this information isn’t well documented. It’s only through trial and error that I’ve come to “understand” what these data offer, how they might be used for research. (And, more commonly, their limitations.)

So I think my next step is to document what I know about these datasets. In a way, these learnings are already embedded in my analysis repositories. But that requires understanding R, combing through my (messy) code, and figuring out the silences. Basically, I’m as bad at documenting what I’ve learned as dataset creators sometimes are at describing their offerings—and I want to improve on that! Here are three ways I’d like to make these data more accessible:

- Each project’s README should have an accessible description of what the dataset offers, things to keep in mind when using it, and ideas for how to best put it to work.
- The data within each dataset should be cleaned up and standardized, preferably reshaped into a [tidy data format](https://r4ds.had.co.nz/tidy-data.html). 
- The data within these datasets should be easier to handle. Currently they’re in large CSVs, usually too large for Excel or Google Sheets to handle happily. My solution is to use R, but I know that doesn’t work for everybody. For a middle ground approach, I wonder about using something like [Datasette](https://github.com/simonw/datasette), a tool that takes CSVs and provides an easy-to-use web interface to query, view, and download their data. ([See, for example, the Datasette interface for a FiveThirtyEight story’s dataset on biopics.](https://fivethirtyeight.datasettes.com/fivethirtyeight/biopics%2Fbiopics)) I could painlessly [host Datasette instances on Glitch](https://datasette.readthedocs.io/en/stable/getting_started.html#try-datasette-without-installing-anything-using-glitch).

All this to say, I think there are many ways to fulfil the roles we’re attracted to, not just through our job titles or positions. My current thinking is to work at it through making dat more accessible, but there are many ways to take it.

That’s all from me for this week! Expect more reading links and the like next time. All the best for the week ahead!

Lucas