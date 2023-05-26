import log from '$lib/utils/log'

/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }:{event:any;resolve:any}) {
	log.bold(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`)
	log.hooks('hooks.server.ts')

	const jwt = event.cookies.get('jwt');
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
	return resolve(event);
}