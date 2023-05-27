import { r as redirect, e as error } from "../../../../chunks/index.js";
import { a as patch } from "../../../../chunks/api.js";
function load({ locals }) {
  if (!locals.user)
    throw redirect(302, "/login");
}
const actions = {
  // @ts-ignore
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
  },
  // @ts-ignore
  save: async ({ cookies, locals, request }) => {
    if (!locals.user) {
      throw error(401);
    }
    const user_id = locals.user.id;
    const data = await request.formData();
    const newData = Object.fromEntries(data.entries());
    const body = await patch(
      `api/v1/user/${user_id}`,
      newData,
      locals.access_token
    );
    locals.user = body;
  }
};
export {
  actions,
  load
};
