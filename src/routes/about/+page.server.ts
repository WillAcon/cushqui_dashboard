import { fail, redirect, error } from '@sveltejs/kit';
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
	save: async ({ cookies, request }) => {
		const data = await request.formData();
		const netData = Object.fromEntries(data.entries());
		console.log("netData",netData);
		const body = await api.post('push_message/chatroom', netData);
        console.log("body",body);
	
	}
};