import { c as create_ssr_component, b as compute_rest_props, p as getContext, d as spread, e as escape_attribute_value, f as escape_object, g as escape, v as validate_component, h as add_attribute, t as createEventDispatcher, u as add_classes, i as compute_slots } from "../../../chunks/index3.js";
import "devalue";
import classNames from "classnames";
import { F as Frame, W as Wrapper } from "../../../chunks/Wrapper.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",
    default: "focus:ring-gray-400 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = classNames(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``}
    ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``}
    ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`}`;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name }, $$restProps, {
      class: classNames("ml-auto", $$props.class)
    }),
    {},
    {
      default: ({ svgSize }) => {
        return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
      }
    }
  )}`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "accent"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { dismissable = false } = $$props;
  let { accent = false } = $$props;
  let hidden = false;
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  divClass = classNames("p-4 text-sm", accent && "border-t-4 ", hidden, $$props.class);
  {
    {
      $$restProps.color = $$restProps.color ?? "blue";
      $$restProps.rounded = $$restProps.rounded ?? !accent;
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { role: "alert" }), {}, {
    default: () => {
      return `<div class="flex items-center">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``}
    <div${add_classes(($$slots.icon ? "ml-3" : "").trim())}>${slots.default ? slots.default({}) : ``}</div>

    ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "-mx-1.5 -my-1.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}</div>
  ${slots.extra ? slots.extra({}) : ``}`;
    }
  })}`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
  return `${show ? `
  <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`}`;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-4" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
const ViewOff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M5.24,22.51l1.43-1.42A14.06,14.06,0,0,1,3.07,16C5.1,10.93,10.7,7,16,7a12.38,12.38,0,0,1,4,.72l1.55-1.56A14.72,14.72,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16,16,0,0,0,5.24,22.51Z"></path><path d="M12 15.73a4 4 0 013.7-3.7l1.81-1.82a6 6 0 00-7.33 7.33zM30.94 15.66A16.4 16.4 0 0025.2 8.22L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.1A15.29 15.29 0 0016 27 16.69 16.69 0 0030.94 16.34 1 1 0 0030.94 15.66zM20 16a4 4 0 01-6 3.44L19.44 14A4 4 0 0120 16zm-4 9a13.05 13.05 0 01-6-1.58l2.54-2.54a6 6 0 008.35-8.35l2.87-2.87A14.54 14.54 0 0128.93 16C26.9 21.07 21.3 25 16 25z"></path></svg>`;
});
const UserAvatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-19z7los_START -->${$$result.title = `<title>Iniciar sesión • Sistema de registro</title>`, ""}<!-- HEAD_svelte-19z7los_END -->`, ""}

<div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-gray-100 dark:bg-gray-900"><a href="" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"><img src="/logo.svg" class="mr-4 h-11" alt="FlowBite Logo">
		<span>Flowbite</span></a>
	
	

	<div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow bg-gray-100 dark:bg-gray-800">${form?.error ? `${validate_component(Alert, "Alert").$$render($$result, { color: "red", dismissable: true }, {}, {
    icon: () => {
      return `<span slot="icon"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></span>`;
    },
    default: () => {
      return `${escape(form.error)}`;
    }
  })}` : ``}
		<h2 class="text-2xl font-bold bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Sign in to platform
		</h2>
		<form class="mt-8 space-y-6" action="?/auth" method="POST"><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { class: "mb-2" }, {}, {
    default: () => {
      return `<span>Usuario</span>`;
    }
  })}
				${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "username",
      type: "email",
      placeholder: "name@flowbite.com",
      size: "lg",
      name: "username"
    },
    {},
    {
      left: () => {
        return `${validate_component(UserAvatar, "UserAvatar").$$render($$result, { size: "24", slot: "left" }, {}, {})}`;
      }
    }
  )}</div>
			<div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "show-password", class: "mb-2" }, {}, {
    default: () => {
      return `Contraseña`;
    }
  })}
				${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "show-password",
      type: "password",
      placeholder: "Your password here",
      name: "password",
      size: "lg"
    },
    {},
    {
      left: () => {
        return `<button slot="left" type="button" class="pointer-events-auto">${`${validate_component(ViewOff, "ViewOff").$$render($$result, { size: "24" }, {}, {})}`}</button>`;
      }
    }
  )}</div>
			<div class="flex items-center justify-between">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      outline: true,
      class: "w-full"
    },
    {},
    {
      default: () => {
        return `Iniciar sesión`;
      }
    }
  )}</div></form></div></div>`;
});
export {
  Page as default
};
