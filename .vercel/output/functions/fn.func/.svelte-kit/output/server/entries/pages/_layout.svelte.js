import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import "../../chunks/Index.svelte_svelte_type_style_lang.js";
import "classnames";
/* empty css                                                    */const app = "";
const PreloadingIndicator_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress-container.svelte-1p6xanl{position:absolute;top:0;left:0;width:100%;height:4px;z-index:999}.progress.svelte-1p6xanl{position:absolute;left:0;top:0;height:100%;background-color:#5cb85c;transition:width 0.4s}.fade.svelte-1p6xanl{position:fixed;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.3);pointer-events:none;z-index:998;animation:svelte-1p6xanl-fade 0.4s}@keyframes svelte-1p6xanl-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const PreloadingIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}

${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  console.log("page strore", $page);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
