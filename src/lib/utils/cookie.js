// Leer una cookie
export function readCookie(name) {
	if (typeof document !== 'undefined') {
		const cookies = document.cookie.split(';')
		const cookie = cookies.find((c) => c.trim().startsWith(`${name}=`))
		if (cookie) {
			return cookie.split('=')[1]
		}
	}
	return null
}

// Escribir una cookie
export function writeCookie(name, value, options = {}) {
	if (typeof document !== 'undefined') {
		const { maxAge, path, domain, secure } = options
		let cookie = `${name}=${value}`
		if (maxAge) {
			cookie += `; max-age=${maxAge}`
		}
		if (path) {
			cookie += `; path=${path}`
		}
		if (domain) {
			cookie += `; domain=${domain}`
		}
		if (secure) {
			cookie += '; secure'
		}
		document.cookie = cookie
	}
}
