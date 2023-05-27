import { error } from '@sveltejs/kit'
import { PUBLIC_API_BASE } from '$env/static/public'

const base = PUBLIC_API_BASE //'http://localhost:8000';
// const base = 'https://cushqui-backend.onrender.com';

async function send({
	method,
	path,
	data,
	token,
}: {
	method: string
	path: string
	data?: any
	token?: string
}) {
	// const opts = { method, headers: {} };

	const opts: {
		method: string
		headers: { 'Content-Type'?: string; Authorization?: string }
		body?: string
	} = {
		method,
		headers: {},
	}

	if (data) {
		opts.headers['Content-Type'] = 'application/json'
		opts.body = JSON.stringify(data)
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`
	}

	const res = await fetch(`${base}/${path}`, opts)
	if (res.ok || res.status === 422) {
		const text = await res.text()
		return text ? JSON.parse(text) : {}
	}

	throw error(res.status)
}

export function get(path: string, token: string) {
	return send({ method: 'GET', path, token })
}

export function del(path: string, token: string) {
	return send({ method: 'DELETE', path, token })
}

export function post(path: string, data: any, token?: string) {
	return send({ method: 'POST', path, data, token })
}

export function put(path: string, data: any, token: string) {
	return send({ method: 'PUT', path, data, token })
}
export function patch(path: string, data: any, token: string) {
	return send({ method: 'PATCH', path, data, token })
}
export function login(path: string, data: any) {
	return sendLogin({ method: 'POST', path, data })
}

async function sendLogin({
	method,
	path,
	data,
}: {
	method: string
	path: string
	data?: any
}) {
	const opts: {
		method: string
		headers: { 'Content-Type'?: string; Authorization?: string }
		body?: string
	} = {
		method,
		headers: {},
	}

	if (data) {
		opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		opts.body = Object.keys(data)
			.map((key) => key + '=' + data[key])
			.join('&')
	}

	const res = await fetch(`${base}/${path}`, opts)
	if (res.ok || res.status === 422) {
		const text = await res.text()
		return text ? JSON.parse(text) : {}
	}
	let text = await res.text()
	return text ? JSON.parse(text) : {}
}
