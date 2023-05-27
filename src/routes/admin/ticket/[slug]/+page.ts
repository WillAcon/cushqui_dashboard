import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log('paramsssss', params)
	if (params.slug === 'settings') {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
		}
	}

	// throw error(404, 'Not found');
}
