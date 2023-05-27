// Leer un valor de localStorage
export function readLocalStorage(key) {
	if (typeof window !== 'undefined' && window.localStorage) {
		return window.localStorage.getItem(key)
	}
	return null
}

// Escribir un valor en localStorage
export function writeLocalStorage(key, value) {
	if (typeof window !== 'undefined' && window.localStorage) {
		window.localStorage.setItem(key, value)
	}
}
