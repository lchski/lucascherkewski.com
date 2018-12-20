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
