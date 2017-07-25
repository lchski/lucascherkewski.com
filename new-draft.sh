#!/bin/zsh
FILESLUG=$1
DRAFTSPATH="./_drafts/"
DATESTAMP=$(date "+%Y-%m-%d")
TIMESTAMP=$(date "+%T %z")
FILENAME="${DRAFTSPATH}${DATESTAMP}-${FILESLUG}.md"
TMPL=$(cat <<-END
---
layout: study--post
title: ''
subtitle: ''
date: '${DATESTAMP} ${TIMESTAMP}'
categories:
published: true
---

{:h2: .f6 .ttu .tracked .mt5 .lh-title}
{:link: .dim .light-purple}
{:blockquote: .ml0 .pl4 .bl .bw3 .b--black-10 .f4}
{:blockquote__citation: .f5 .measure}

END
)

if [ -z "$1" ]
  then
    echo "No filename slug supplied"
	exit 1
fi

touch $FILENAME
echo $TMPL > $FILENAME

echo "New draft created: ${FILENAME}"
exit 0
