import { fail, redirect } from '@sveltejs/kit'
import * as api from '$lib/api'

/** @type {import('./$types').PageServerLoad} */
// @ts-ignore
export async function load({ parent }) {
	// console.log("parent",parent)
	const { user } = await parent()
	// console.log("parent user",user)
	if (user) {
		throw redirect(307, '/')
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	// @ts-ignore
	default: async ({ cookies, request }) => {
		const data = await request.formData()
		const netData = Object.fromEntries(data.entries())
		console.log('netData', netData)

		const body = await api.post('api/v1/user', netData)

		console.log('resultaod', body)
		if (body.errors) {
			return fail(401, body)
		}
		// const value = btoa(JSON.stringify(body.user));
		// cookies.set('jwt', value, { path: '/' });
		throw redirect(307, '/login')
	},
}
