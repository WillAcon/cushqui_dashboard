console.log("Starting TS file")
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user && locals.user.userData && {
			username: locals.user.userData.email,
			name: locals.user.userData.first_name +' '+locals.user.userData.last_name,
			first_name:  locals.user.userData.first_name,
			last_name:  locals.user.userData.last_name,
			// image: locals.user.user.image,
			// bio: locals.user.bio
		},
		isLogin: locals.user && locals.user.userData ? true : false
	};
}
