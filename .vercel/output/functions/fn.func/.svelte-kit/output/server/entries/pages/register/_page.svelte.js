import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "devalue";
import { L as ListErrors } from "../../../chunks/ListErrors.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-15rwypm_START -->${$$result.title = `<title>Sign up • Conduit</title>`, ""}<!-- HEAD_svelte-15rwypm_END -->`, ""}

<div class="auth-page"><div class="container page">${validate_component(ListErrors, "ListErrors").$$render($$result, { errors: form?.errors }, {}, {})}

		<div class="w-full max-w-xs"><form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST"><div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" required placeholder="Email"></div>
				<div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password
					</label>
					<input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" required placeholder="Password"></div>
				<div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="password">Confirmar Password
					</label>
					<input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="passwordConfirm" type="password" required placeholder="Password">
					<p class="text-red-500 text-xs italic">Please choose a password.</p></div>

				<div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="password">Nombre
					</label>
					<input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="first_name" type="text" required placeholder="Nombre"></div>
				<div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="password">Apellido
					</label>
					<input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="last_name" type="text" required placeholder="Apellido"></div>
				<div class="flex items-center justify-between"><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrar
					</button>
					<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?
					</a></div></form></div>

		<div class="row"><div class="col-md-6 offset-md-3 col-xs-12"><h1 class="text-xs-center">Sign up</h1>
				<p class="text-xs-center"><a href="/login">Have an account?</a></p></div></div></div></div>`;
});
export {
  Page as default
};
