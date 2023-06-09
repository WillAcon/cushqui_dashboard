import { fail, redirect, error } from '@sveltejs/kit'
import * as api from '$lib/api'

// import { createNanoEvents } from 'nanoevents'

/** @type {import('./$types').PageLoad} */
// @ts-ignore
export function load({ locals }) {
	// console.log("locals", locals);
	if (!locals.user) throw redirect(302, '/login')
}

/** @type {import('./$types').Actions} */
export const actions = {
	// @ts-ignore
	logout: async ({ cookies, locals }) => {
		// const emitter = createNanoEvents();
		// console.log("logged emitter", emitter);
		// emitter.emit('logoutEmit', 'Hola desde el servidor');
		cookies.delete('jwt', { path: '/' })
		locals.user = null
	},
	// @ts-ignore
	save: async ({ cookies, locals, request }) => {
		if (!locals.user) {
			throw error(401)
		}
		const user_id = locals.user.id
		const data = await request.formData()
		const newData = Object.fromEntries(data.entries())

		const body = await api.patch(
			`api/v1/user/${user_id}`,
			newData,
			locals.access_token
		)
		// if (body.errors) return fail(400, body.errors)
		locals.user = body
		// const value = btoa(JSON.stringify(locals.user))
		// cookies.set('jwt', value, { path: '/' })
	},
}
