---
date: 2022-11-21T12:16:06.791-05:00
title: VSTACK function - Microsoft Support
bookmark-of: https://support.microsoft.com/en-us/office/vstack-function-a4b86897-be0f-48fc-adca-fcc10d795a9c
syndication:
  - https://mastodon.social/@lchski/109382929711001914
---
I’m not in the business of advocating people use Excel. _But_, for those situations where Excel is the quiet workhorse of your org (check in with your friends in finance and personnel!), turns out `VSTACK` is the function to consolidate multiple ranges into one. (e.g., if you’re trying to tidy data split into multiple sheets, where the sheets are a stand-in for some variable.)

Google Sheets equivalent would be, e.g., `={Sheet1!A:C;Sheet2!A:C}` or `=QUERY(…)`.

R tidyverse equivalent would be `row_bind`. (Would we could just use R.)
