import 'dotenv/config'
import slugify	from 'slugify'
import * as fs from 'fs'
import fetch from 'node-fetch'

const linksDirectory = '_links/';

async function getLatestLinkBookmarks() {
	const response = await fetch(
		`https://api.pinboard.in/v1/posts/recent?auth_token=${process.env.PINBOARD_API_TOKEN}&format=json&tag=to-link`
	);
	const data = await response.json();

	return data;
}

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

function fileNameFromBookmark(bookmark) {
	// convert to EST (bookmarks are saved in UTC), then output in `en-CA` locale (which uses ISO dates), then slice just the date
	const fileDate = new Date(bookmark.time).toLocaleString('en-CA', {timeZone: 'America/Toronto'}).slice(0, 10);

	// slugify, then pull first three (at max) words in slug
	const fileSlug = slugify(bookmark.description, {lower: true, strict: true, locale: 'en'}).split('-', 3).join('-');

	return `${fileDate}-${fileSlug}.md`;
}

function saveLinkPostToDisk(bookmark) {
	fs.writeFileSync(`${linksDirectory}${fileNameFromBookmark(bookmark)}`, convertBookmarkToLinkPost(bookmark));
}

const linkBookmarks = await getLatestLinkBookmarks();

linkBookmarks.posts.forEach(saveLinkPostToDisk);
