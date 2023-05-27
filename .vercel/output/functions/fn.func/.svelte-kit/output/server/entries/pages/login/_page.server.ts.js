import { r as redirect, f as fail } from "../../../chunks/index.js";
import { l as login } from "../../../chunks/api.js";
async function load({ locals }) {
  if (locals.user)
    throw redirect(307, "/");
}
const actions = {
  auth: async ({ cookies, request }) => {
    const data = await request.formData();
    const netData = Object.fromEntries(data.entries());
    console.log("netData", netData);
    const body = await login("auth/login", netData);
    if (body.detail) {
      return fail(422, {
        description: "descripcion",
        error: body.detail
      });
    }
    const value = btoa(JSON.stringify(body));
    cookies.set("jwt", value, { path: "/" });
    throw redirect(307, "/");
  }
};
export {
  actions,
  load
};
