import { fail, redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }:{locals: any}) {
	console.log("page server1");
	// if (!locals.user) throw redirect(307, '/login');
	if (locals.user) throw redirect(307, '/admin');
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies, locals }:{ cookies :any, locals:any }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
        redirect(307, '/');
	},
};