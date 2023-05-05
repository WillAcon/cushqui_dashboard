import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals, parent }) {
	const productos =  await api.get('api/v1/product/')
	return {productos};
}
