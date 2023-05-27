import { r as redirect, f as fail } from "../../../chunks/index.js";
import { p as post } from "../../../chunks/api.js";
async function load({ parent }) {
  const { user } = await parent();
  if (user) {
    throw redirect(307, "/");
  }
}
const actions = {
  // @ts-ignore
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const netData = Object.fromEntries(data.entries());
    console.log("netData", netData);
    const body = await post("api/v1/user", netData);
    console.log("resultaod", body);
    if (body.errors) {
      return fail(401, body);
    }
    throw redirect(307, "/login");
  }
};
export {
  actions,
  load
};
