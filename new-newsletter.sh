#!/bin/zsh
FILESLUG=$1
DRAFTSPATH="./_newsletters/"
DATESTAMP=$(date "+%Y-%m-%d")
TIMESTAMP=$(date "+%T %z")
FILENAME="${DRAFTSPATH}${DATESTAMP}-${FILESLUG}.md"
TMPL=$(cat <<-END
---
layout: study--newsletter
title: ''
number: '${FILESLUG}'
date: '${DATESTAMP} ${TIMESTAMP}'
published: true
---

END
)

if [ -z "$1" ]
  then
    echo "No issue number supplied"
	exit 1
fi

touch $FILENAME
echo $TMPL > $FILENAME

echo "New newsletter created: ${FILENAME}"
exit 0
