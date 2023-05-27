import { r as redirect } from "../../chunks/index.js";
async function load({ locals }) {
  console.log("page server1");
  if (locals.user)
    throw redirect(307, "/admin");
}
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
    redirect(307, "/");
  }
};
export {
  actions,
  load
};
