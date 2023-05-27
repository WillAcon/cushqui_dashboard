import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="grid place-items-center h-screen">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/login",
      outline: true,
      color: "dark"
    },
    {},
    {
      default: () => {
        return `Login`;
      }
    }
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ag7i7f_START -->${$$result.title = `<title>Inicio | chocolatealo</title>`, ""}<!-- HEAD_svelte-ag7i7f_END -->`, ""}

${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
