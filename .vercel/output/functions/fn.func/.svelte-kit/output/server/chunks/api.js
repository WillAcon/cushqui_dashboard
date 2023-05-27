import { e as error } from "./index.js";
import { a as PUBLIC_API_BASE } from "./public.js";
const base = PUBLIC_API_BASE;
async function send({
  method,
  path,
  data,
  token
}) {
  const opts = {
    method,
    headers: {}
  };
  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }
  if (token) {
    opts.headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${base}/${path}`, opts);
  if (res.ok || res.status === 422) {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }
  throw error(res.status);
}
function get(path, token) {
  return send({ method: "GET", path, token });
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function patch(path, data, token) {
  return send({ method: "PATCH", path, data, token });
}
function login(path, data) {
  return sendLogin({ method: "POST", path, data });
}
async function sendLogin({
  method,
  path,
  data
}) {
  const opts = {
    method,
    headers: {}
  };
  if (data) {
    opts.headers["Content-Type"] = "application/x-www-form-urlencoded";
    opts.body = Object.keys(data).map((key) => key + "=" + data[key]).join("&");
  }
  const res = await fetch(`${base}/${path}`, opts);
  if (res.ok || res.status === 422) {
    const text2 = await res.text();
    return text2 ? JSON.parse(text2) : {};
  }
  let text = await res.text();
  return text ? JSON.parse(text) : {};
}
export {
  patch as a,
  get as g,
  login as l,
  post as p
};
