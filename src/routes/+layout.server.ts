// get `locals.user` and pass it to the `page` store
export const load = async ({ locals }: { locals: any }) => {
	return {
		user: locals.user,
		isLogin: !!(locals.user && locals.user.id),
	}
}
