// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			secret: string
			access_token: string
			refresh_token: string
			user: {
				id: string
				email: string
				first_name: string
				last_name: string
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
