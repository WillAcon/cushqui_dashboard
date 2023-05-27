import { c as create_ssr_component, n as each, g as escape } from "./index3.js";
const ListErrors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errors } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `${errors ? `<ul class="error-messages">${each(Object.keys(errors), (key) => {
    return `<li>${escape(key)} ${escape(errors[key])}</li>`;
  })}</ul>` : ``}`;
});
export {
  ListErrors as L
};
