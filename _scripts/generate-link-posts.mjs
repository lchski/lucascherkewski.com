import 'dotenv/config'
import fetch from 'node-fetch'

const response = await fetch(
	`https://api.pinboard.in/v1/posts/recent?auth_token=${process.env.PINBOARD_API_TOKEN}&format=json&tag=to-link`
);
const data = await response.json();

console.log(data);

function extractAnnotation(stringToSearch) {
	const re = /(?<=<ANNOT>)[^]*?(?=<\/ANNOT>)/gs;

	const annotation = stringToSearch.match(re);

	if (null == annotation) {
		return '';
	}

	return annotation[0];
}

function convertBookmarkToLinkPost(bookmark) {
	const bookmarkAnnotation = extractAnnotation(bookmark.extended);
	
	const linkPostTemplate = `---
layout: study--link
title: '${bookmark.description}'
link: '${bookmark.href}'
link_title: '${bookmark.description}'
date: ${bookmark.time}
published: ${'' == bookmarkAnnotation ? 'false' : 'true'}
---
${bookmarkAnnotation}
`;

	return (linkPostTemplate);
}
