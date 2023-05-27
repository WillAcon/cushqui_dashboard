import { fail, redirect } from '@sveltejs/kit'
import * as api from '$lib/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/')
}

/** @type {import('./$types').Actions} */
export const actions = {
	auth: async ({ cookies, request }) => {
		const data = await request.formData()
		const netData = Object.fromEntries(data.entries())
		console.log("netData",netData)
		const body = await api.login('auth/login', netData)

		if (body.detail) {
			return fail(422, {
				description: 'descripcion',
				error: body.detail,
			})
		}

		// return true;
		const value = btoa(JSON.stringify(body))
		cookies.set('jwt', value, { path: '/' })
		throw redirect(307, '/')

		// return {productos};

		// console.log("-------", datatemp1);
		// let client_id = '';
		// let client_secret = '';
		// let password = data.get('password');
		// let email = data.get('username');
		// // let datatemp = {
		// // 	username: data.get('username'),
		// // 	password: data.get('password')
		// // };

		// var queryString = Object.keys(datatemp1).map(key => key + '=' + datatemp1[key]).join('&');
		// console.log(queryString)

		// const logindata =  await fetch('http://localhost:8000/auth/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	body: queryString
		// })
		// .then(r =>  r.json())
		// .then(data => {return data})

		// console.log(logindata)

		// const body = await api.post('users/login', {
		// 	user: {
		// 		email: data.get('email'),
		// 		password: data.get('password')
		// 	}
		// });

		// if (body.errors) {
		// 	return fail(401, body);
		// }

		// const value = btoa(JSON.stringify(body.user));
		// cookies.set('jwt', value, { path: '/' });

		// throw redirect(307, '/');
	},
}
