/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
	console.log("event hook");
	const jwt = event.cookies.get('jwt');
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
	return resolve(event);
}