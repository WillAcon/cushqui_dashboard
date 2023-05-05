import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	// console.log("parent",parent)
	// const { user } = await parent();
	// // console.log("parent user",user)
	// if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const netData = Object.fromEntries(data.entries());
		console.log("netData",netData);

		const body = await api.post('cola1', netData);
        console.log("body",body);
	
	}
};
