import { error } from '@sveltejs/kit';

const base = 'http://localhost:8000';

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export function get(path, token) {
	console.log("GETTaaaa", path)
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
export function patch(path, data, token) {
	return send({ method: 'PATCH', path, data, token });
}
export function login(path, data, token) {
	return sendLogin({ method: 'POST', path, data, token });
}
async function sendLogin({ method, path, data }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		opts.body = Object.keys(data).map(key => key + '=' + data[key]).join('&');
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}
	let text = await res.text();
	return text ? JSON.parse(text) : {};
	// throw error(res.status);
}