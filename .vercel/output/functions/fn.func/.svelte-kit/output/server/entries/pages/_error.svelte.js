import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_attribute_value, f as escape_object, g as escape, v as validate_component, a as subscribe } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"></path></svg>`;
});
const _404 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900"><div class="block md:max-w-lg"><img src="/images/illustrations/404.svg" alt="astronaut image"></div>
	<div class="text-center xl:max-w-4xl"><h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Page not found
		</h1>
		<p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Oops! Looks like you followed a bad link. If you think this is a problem
			with us, please tell us.
		</p>
		${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Go back home ${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}`;
    }
  })}</div></div>`;
});
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-lrm3o6{margin:4em 0;text-align:center}@media(min-width: 480px){h1.svelte-lrm3o6{font-size:4em}}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("algo salio xxx", $page);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1pmtc3j_START -->${$$result.title = `<title>${escape($page.status)}</title>`, ""}<!-- HEAD_svelte-1pmtc3j_END -->`, ""}

<div>${$page.status === 404 ? `${validate_component(_404, "NotFound").$$render($$result, {}, {}, {})}` : `<h1 class="svelte-lrm3o6">Algo salió mal</h1>`}
</div>`;
});
export {
  Error as default
};
