import { c as create_ssr_component, t as createEventDispatcher, g as escape, v as validate_component, h as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
import { L as ListErrors } from "../../../../chunks/ListErrors.js";
import "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  createEventDispatcher();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-ync0zh_START -->${$$result.title = `<title>Settings • Conduit</title>`, ""}<!-- HEAD_svelte-ync0zh_END -->`, ""}
<h1>${escape(data.post.title)}</h1>
<div class="settings-page"><div class="container mx-auto w-1/2"><div class="row"><div class="col-md-6 offset-md-3 col-xs-12"><h1 class="text-xs-center text-center">Your Settings</h1>

				${validate_component(ListErrors, "ListErrors").$$render($$result, { errors: form?.errors }, {}, {})}
				${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Activar evento foo`;
    }
  })}

				<form method="POST" action="?/save"><div class="grid gap-6 mb-6 md:grid-cols-2"><div><label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
							<input type="text"${add_attribute("value", data.user.first_name, 0)} name="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required></div></div>
					<div class="grid gap-6 mb-6 md:grid-cols-2"><div><label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
							<input type="text"${add_attribute("value", data.user.last_name, 0)} name="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required></div></div>
					<fieldset><fieldset class="form-group"><div>${escape(data?.user?.username)}</div></fieldset>
						<div class="pt-5">${validate_component(Button, "Button").$$render($$result, { class: "bg-green-500", type: "submit" }, {}, {
    default: () => {
      return `Update Settings`;
    }
  })}</div></fieldset></form>

				<div class="h-10"></div>

				<form method="POST" action="?/logout">${validate_component(Button, "Button").$$render($$result, { class: "bg-orange-500", type: "submit" }, {}, {
    default: () => {
      return `Or click here to logout.`;
    }
  })}</form></div></div></div></div>`;
});
export {
  Page as default
};
