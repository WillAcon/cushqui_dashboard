import "../../../../chunks/index.js";
import { p as post } from "../../../../chunks/api.js";
async function load({ parent }) {
}
const actions = {
  // @ts-ignore
  save: async ({ cookies, request }) => {
    const data = await request.formData();
    const netData = Object.fromEntries(data.entries());
    console.log("netData", netData);
    const body = await post("push_message/chatroom", netData, "");
    console.log("body", body);
  }
};
export {
  actions,
  load
};
