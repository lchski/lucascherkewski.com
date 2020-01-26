I’m writing to you from one of my favourite spots, a library.

Libraries are institutional versions of the role I’d like to play in life, that of a trusted advisor, someone who dives in deep on a subject and then brings information together in a usable way. As repositories of knowledge, library stacks are wells of information from which to draw when learning about and reflecting on the world. (They’re also much more than what’s “in the stacks”, as [Ottawa’s Central Library project demonstrates](https://inspire555.ca/library-archives-spaces/).)

Lately, I’ve been thinking more intentionally about fulfilling this role through my current pastime, playing with government datasets. (I assure you, this differs from my day job!)

If you [scroll through my GitHub profile](https://github.com/lchski?tab=repositories), you’ll [see a host of repositories suffixed `-analysis`](https://github.com/lchski?utf8=%E2%9C%93&tab=repositories&q=-analysis). These include projects looking at the [Social Sciences and Humanities Research Council (SSHRC) awards](https://github.com/lchski/sshrc-awards-analysis), [Government of Canada Public Accounts](https://github.com/lchski/public-accounts-analysis), and [Public Service Employee Survey results](https://github.com/lchski/pses-analysis). There’s also one on [Canadian parliamentarians](https://github.com/lchski/parliamentarians-analysis), which I’ve alluded to before. (And plan to describe more in-depth in the future.)

These are all datasets I’ve come across for one reason or another, usually to answer some specific question. That grows into a more general curiosity as I start exploring the data, learning both the schema (what variables/columns are in the dataset) and the scope (how granular the observations/rows are). For many of these public datasets, this information isn’t well documented. It’s only through trial and error that I’ve come to “understand” what these data offer, how they might be used for research. (And, more commonly, their limitations.)

So I think my next step is to document what I know about these datasets. In a way, these learnings are already embedded in my analysis repositories. But that requires understanding R, combing through my (messy) code, and figuring out the silences. Basically, I’m as bad at documenting what I’ve learned as dataset creators sometimes are at describing their offerings—and I want to improve on that! Here are three ways I’d like to make these data more accessible:

- Each project’s README should have an accessible description of what the dataset offers, things to keep in mind when using it, and ideas for how to best put it to work.
- The data within each dataset should be cleaned up and standardized, preferably reshaped into a [tidy data format](https://r4ds.had.co.nz/tidy-data.html). 
- The data within these datasets should be easier to handle. Currently they’re in large CSVs, usually too large for Excel or Google Sheets to handle happily. My solution is to use R, but I know that doesn’t work for everybody. For a middle ground approach, I wonder about using something like [Datasette](https://github.com/simonw/datasette), a tool that takes CSVs and provides an easy-to-use web interface to query, view, and download their data. ([See, for example, the Datasette interface for a FiveThirtyEight story’s dataset on biopics.](https://fivethirtyeight.datasettes.com/fivethirtyeight/biopics%2Fbiopics)) I could painlessly [host Datasette instances on Glitch](https://datasette.readthedocs.io/en/stable/getting_started.html#try-datasette-without-installing-anything-using-glitch).

And then, of course, once I’ve made some strides in improving the accessibility of these datasets, the question becomes one of getting them into people’s hands—but that’s a topic for another day.

I hope you took something interesting or useful from this walkthrough of my thought process. The principles at play here are important ones that apply well beyond the world of government datasets: learn deeply, document what you know, and share it widely.

That’s all from me for this week! Expect more reading links and the like next time. All the best for the week ahead!

Lucas