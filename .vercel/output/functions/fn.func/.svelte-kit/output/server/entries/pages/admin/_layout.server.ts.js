import { r as redirect } from "../../../chunks/index.js";
function load({ locals }) {
  if (!locals.user)
    throw redirect(307, "/login");
}
export {
  load
};
