import "../../../chunks/index.js";
import { g as get } from "../../../chunks/api.js";
async function load({ locals, parent }) {
  const productos = await get("api/v1/product/");
  return { productos };
}
export {
  load
};
