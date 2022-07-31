import 'dotenv/config'
import fetch from 'node-fetch'

// const response = await fetch(
// 	`https://api.pinboard.in/v1/posts/recent?auth_token=${process.env.PINBOARD_API_TOKEN}&format=json&tag=to-link`
// );
// const data = await response.json();

// console.log(data);

const testData = [
	{
		href: 'https://aworkinglibrary.com/writing/practice-the-future',
		description: 'Practice the future | A Working Library',
		extended: '<ANNOT>Mandy Brown on “practice” and the future.</ANNOT>\n' +
		  '\n' +
		  '- Octavia Butler on trying to predict the future (influence, not mere forecasting, as MB points out)\n' +
		  '> > Because prediction is a useful way of pointing out safer, wiser courses. Because, most of all, our tomorrow is the child of our today. Through thought and deed, we exert a great deal of influence over this child, even though we can’t control it absolutely. Best to think about it, though. Best to try to shape it into something good. Best to do that for any child.\n' +
		  '\n' +
		  '> I take practice to refer both to a kind of rehearsal but also to showing up and putting in the time—practice not only as an exercise but also as training or preparation, or as experimentation and play. I distinguish practicing from planning in that the former is located in the present, while the latter presumes some authority over the future. \n' +
		  '\n' +
		  '> But the future is always an undiscovered country. The degree of uncertainty we feel bears little relation to an unknown and unknowable future. It’s a reflection, instead, of our relationship to the present—how we are thinking and acting and shaping what’s to come. \n' +
		  '\n' +
		  '> I left with an intention to practice—to practice different relationships to work, to practice rest and meditation, to practice being of service.\n' +
		  '\n' +
		  '> I’m not making a pivot so much as applying a filter. Among the things I’ve observed from people with long careers is that there are often periods of accumulation—times when you’re gathering lots of skills or contexts or habits—followed by periods of subtraction—when you peel things away in order to focus on a few key intentions. It’s kind of like writing and editing that way: you write a whole lot, figure out what you mean, and then _cut, cut, cut_ to get at the good parts.',
		meta: '5870ee6f9a9db665adf78ce810bae22f',
		hash: 'cdc504b425fdababd33ffc9976682a87',
		time: '2022-07-31T18:25:09Z',
		shared: 'no',
		toread: 'no',
		tags: 'by:mandy-brown career life change work to-link'
	  },
	  {
		href: 'https://simonwillison.net/2022/Jun/12/twenty-years/',
		description: 'Twenty years of my blog',
		extended: '- so cool to see history of various computing things through own experience!\n' +
		  '\n' +
		  '<ANNOT>\n' +
		  'Enjoyed this survey of Simon Willison’s history with blogging. I’ll always cheer for folks celebrating their blog!\n' +
		  '\n' +
		  'Also neat to see the technological tour over Simon’s career—a sort of personal history of web technology and the like.\n' +
		  '</ANNOT>',
		meta: '6481e0371c9e2e01b9b41ca92b970f24',
		hash: '3209e9aab7906fd3f37891ba75f7e3cd',
		time: '2022-07-31T00:40:22Z',
		shared: 'no',
		toread: 'no',
		tags: 'blogging history history-computing by:simon-willison to-link'
	  }
];

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

console.log(convertBookmarkToLinkPost(testData[0]));
console.log(convertBookmarkToLinkPost(testData[1]));
