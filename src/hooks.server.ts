import log from '$lib/utils/log'
import * as api from '$lib/api'
import type { Handle, Load} from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	log.bold(`📣 SE ESTÁ HACIENDO UNA NUEVA SOLICITUD DESDE ${event.url.pathname}`)
	try {
			const jwt : any = event.cookies.get('jwt')
			const decodedString = atob(jwt);
			const cookie_temp = JSON.parse(decodedString);
			event.locals.access_token = cookie_temp.access_token
			event.locals.refresh_token = cookie_temp.refresh_token
			const body = await api.get(`api/v1/user/me`, cookie_temp.access_token)
			if(body) {
				event.locals.user = body
			}
			else{
				event.locals.access_token = ''
				event.cookies.delete('jwt', { path: '/' })
			}
			console.log('Carga desde API N veces',body)
		} catch (error) {
			console.error('Error al decodificar o analizar el JSON:');
			event.locals.access_token = ''
			event.cookies.delete('jwt', { path: '/' })
		}

	//cosultar datos de usuario
	// event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
	return resolve(event)
}
// Hook `load` que se ejecuta al cargar la página
export const load: Load = async ({ event, resolve }) => {
	log.bold(`📣 LOAD PAGE`)

};