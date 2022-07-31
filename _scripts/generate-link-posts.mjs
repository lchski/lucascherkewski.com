import 'dotenv/config'
import fetch from 'node-fetch'

const response = await fetch(
	`https://api.pinboard.in/v1/posts/recent?auth_token=${process.env.PINBOARD_API_TOKEN}&format=json&tag=to-link`
);
const data = await response.json();

console.log(data);

