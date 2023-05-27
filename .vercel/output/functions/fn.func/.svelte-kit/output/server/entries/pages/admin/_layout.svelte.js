import { c as create_ssr_component, a as subscribe, h as add_attribute, g as escape, i as compute_slots, b as compute_rest_props, d as spread, e as escape_attribute_value, f as escape_object, j as is_void, v as validate_component, k as get_current_component, l as globals, m as missing_component, n as each, o as null_to_empty } from "../../../chunks/index3.js";
import { o as open, a as open_ew } from "../../../chunks/Index.svelte_svelte_type_style_lang.js";
import classNames from "classnames";
/* empty css                                                       */import { createPopper } from "@popperjs/core";
import { F as Frame, W as Wrapper } from "../../../chunks/Wrapper.js";
import { p as page } from "../../../chunks/stores.js";
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_open();
  return `
<div${add_attribute(
    "class",
    $open ? "bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:bg-transparent overlay-div lg:hidden" : "overlay-div",
    0
  )}></div>`;
});
const IconSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path></svg>`;
});
const IconNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" strokelinecap="round" strokelinejoin="bevel"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>`;
});
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<svg class="${"text-gray-400 bg-gray-100 dark:bg-gray-600 " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = classNames("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = classNames(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render($$result, { rounded }, {}, {})}`}`}
    ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`}`;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  return `<button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    `}</span>
  <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    `}</span></button>`;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open: open2 = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open2 },
        { name: "flip", enabled: false }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0)
    $$bindings.open(open2);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open2);
  }
  popper && popper.setOptions({ placement });
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open2 && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({}, { use: init }, { options: triggerEl }, { role: "tooltip" }, { tabIndex: activeContent ? -1 : void 0 }, $$restProps, {
      class: classNames("z-10 outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div data-popper-arrow class="tooltip-arrow"></div>` : ``}`;
      }
    }
  )}` : ``}`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "frameClass"]);
  let $$slots = compute_slots(slots);
  let { open: open2 = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0)
    $$bindings.open(open2);
  if ($$props.frameClass === void 0 && $$bindings.frameClass && frameClass !== void 0)
    $$bindings.frameClass(frameClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: popoverClass }, { open: open2 }),
      {
        open: ($$value) => {
          open2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div class="py-1 overflow-hidden rounded-t">${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? "py-1 w-44", 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div class="py-1 overflow-hidden rounded-b">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DropdownDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "my-1 h-px bg-gray-100 dark:bg-gray-600" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      }
    ],
    {}
  )}></div>`;
});
const DropdownHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "divider"]);
  let { divClass = "py-2 px-4 text-gray-700 dark:text-white" } = $$props;
  let { divider = true } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>
${divider ? `${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}` : ``}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = classNames(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}`;
});
const AvatarUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user: user2 } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user2 !== void 0)
    $$bindings.user(user2);
  return `${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      id: "user-drop",
      src: "/images/1.jpg",
      dot: { color: "green" }
    },
    {},
    {}
  )}
${validate_component(Dropdown, "Dropdown").$$render($$result, { triggeredBy: "#user-drop" }, {}, {
    default: () => {
      return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<span class="block text-sm">Bonnie Green </span>
		<span class="block truncate text-sm font-medium">${escape(user2)}</span>`;
        }
      })}
	${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Editar cuenta`;
        }
      })}
	${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Tareas pendientes`;
        }
      })}
	${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}
	${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Cerrar sesión`;
        }
      })}`;
    }
  })}`;
});
let user = "Williams";
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open_ew, $$unsubscribe_open_ew;
  let $open, $$unsubscribe_open;
  $$unsubscribe_open_ew = subscribe(open_ew, (value) => $open_ew = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  console.log("OPEN_EW", $open_ew);
  $$unsubscribe_open_ew();
  $$unsubscribe_open();
  return `<header class="h-20 items-center relative lg:z-111"><div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex flex-center shadow-sm flex-col h-full justify-center mx-auto relative px-3 text-black dark:text-white z-10"><div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68"><div class="flex group h-full items-center relative w-12"><button type="button" aria-expanded="false" aria-label="Toggle sidenav" class="text-4xl text-black dark:text-white focus:outline-none pr-9 pl-3">${$open ? `<div class="p-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-full">${validate_component(IconSlider, "IconSlider").$$render($$result, { size: "36" }, {}, {})}</div>` : `<div class="p-2">${validate_component(IconSlider, "IconSlider").$$render($$result, { size: "36" }, {}, {})}</div>`}</button>

				<span class="ml-2 md:mr-24 hidden lg:flex"><img src="/logo.svg" class="h-8 mr-3" alt="FlowBite Logo">
					<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Administrador ${escape($open_ew)}</span></span></div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto"><span class="block pr-5 hidden lg:block"><button>Evento cookie</button></span>
				<span class="block pr-5">${validate_component(DarkMode, "DarkMode").$$render($$result, { size: "26" }, {}, {})}</span>
				<span class="block pr-5">${validate_component(IconNotification, "IconNotification").$$render($$result, { size: "26" }, {}, {})}</span>
				<span class="block pr-5 relative">${validate_component(IconNotification, "IconNotification").$$render($$result, { size: "26" }, {}, {})}</span>
				<span class="block relative">${validate_component(AvatarUser, "AvatarUser").$$render($$result, { user }, {}, {})}</span></div></div></div></header>`;
});
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`;
});
const SettingsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
});
const StatusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`;
});
const DocumentationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`;
});
const CreditsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>`;
});
const data = [
  {
    title: "Home",
    icon: HomeIcon,
    link: "/admin"
  },
  {
    title: "Tickets",
    icon: DocumentationIcon,
    link: "/admin/ticket",
    id: "ticket",
    subitems: [
      {
        title: "Lista",
        link: "/admin/ticket"
      },
      {
        title: "Crear",
        link: "/admin/ticket/create"
      }
    ]
  },
  {
    title: "Archives",
    icon: StatusIcon,
    link: "/admin/sorteo"
  },
  {
    title: "Credits",
    icon: CreditsIcon,
    link: "/admin/credits"
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    link: "/admin/settings"
  }
  // {
  // 	title: 'Documentation',
  // 	icon: Home,
  // 	link: '/admin/documentation'
  // }
];
const BottomMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const style = {
    default: "space-x-4",
    close: `flex-col space-y-4`
  };
  $$unsubscribe_open();
  return `<div${add_attribute("class", `absolute bottom-0 left-0 justify-center flex w-full p-4  ${$open ? style.default : style.close}`, 0)}><a href="/" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg></a>
	<a href="/" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></a>
	<button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg></button></div>`;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { open: open2 } = $$props;
  let { page: page2 } = $$props;
  const style = {
    title: `mx-4`,
    default: "hover:bg-gray-700 hover:dark:bg-gray-200 hover:dark:text-black rounded-full hover:text-white",
    active: `bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-full`,
    link: `flex items-center p-1 text-base text-gray-900 rounded-lg  group dark:text-gray-200 pb-1 mb-2`,
    linkOpen: `flex items-center p-1 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 mb-2`,
    activeOpen: `bg-gray-200 dark:bg-gray-700`,
    close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
    open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
  };
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0)
    $$bindings.open(open2);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  return `<a${add_attribute(
    "class",
    `${open2 ? style.linkOpen : style.link} ${open2 && (item.link === page2.url.pathname || item.subitems && page2.url.pathname.startsWith(item.link)) ? style.activeOpen : ""}`,
    0
  )}${add_attribute("href", item.link, 0)}><div${add_attribute(
    "class",
    `p-2 ${item.link === page2.url.pathname || item.subitems && page2.url.pathname.startsWith(item.link) ? style.active : style.default}`,
    0
  )}><span>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { size: "24" }, {}, {})}</span></div>
	<span${add_attribute("class", `${style.title} ${open2 ? style.open : style.close}`, 0)}>${escape(item.title)}</span></a>`;
});
const Items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let $page, $$unsubscribe_page;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const style = {
    default: "flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11",
    active: `bg-gray-200 dark:bg-gray-700`
  };
  $$unsubscribe_open();
  $$unsubscribe_page();
  return `<ul class="md:pl-3 md:pr-3">${each(data, (item, i) => {
    return `<li>${item.subitems && $open ? `${validate_component(MenuItem, "MenuItem").$$render($$result, { item, open: $open, page: $page }, {}, {})}
				<ul${add_attribute("id", `${item.id}`, 0)} class="py-2 space-y-2">${each(item.subitems, (subitem) => {
      return `<li><a${add_attribute("href", subitem.link, 0)}${add_attribute(
        "class",
        `${style.default} ${$open && subitem.link === $page.url.pathname ? style.active : ""}`,
        0
      )}>${escape(subitem.title)}</a>
						</li>`;
    })}
				</ul>` : `${validate_component(MenuItem, "MenuItem").$$render($$result, { item, open: $open, page: $page }, {}, {})}`}
		</li>`;
  })}</ul>

${validate_component(BottomMenu, "BottomMenu").$$render($$result, {}, {}, {})}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex lg:hidden bg-white dark:bg-gray-800 items-center justify-center mb-6 pb-6 pt-3 sticky top-0 z-10"><img src="/logo.svg"${add_attribute("width", 80, 0)}${add_attribute("height", 90, 0)} alt="Enoch Ndika"></div>`;
});
const css = {
  code: ".scrollbar.svelte-m2bisa::-webkit-scrollbar{width:0;background:transparent}.scrollbar.svelte-m2bisa{-ms-overflow-style:none}",
  map: null
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const style = {
    mobilePosition: {
      left: "left-0 ",
      right: "right-0 lg:left-0"
    },
    container: `pb-32 lg:pb-12 lg:mt-12`,
    close: `duration-700 ease-out hidden transition-all lg:w-24`,
    open: `absolute duration-700 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
    default: `border border-gray-200 dark:border-gray-700 h-screen overflow-y-auto text-black dark:text-white top-0 lg:absolute bg-white dark:bg-gray-800 lg:block lg:z-40`
  };
  let { mobilePosition = "right" } = $$props;
  if ($$props.mobilePosition === void 0 && $$bindings.mobilePosition && mobilePosition !== void 0)
    $$bindings.mobilePosition(mobilePosition);
  $$result.css.add(css);
  $$unsubscribe_open();
  return `<aside class="${escape(null_to_empty(`pt-16 ${style.default} ${style.mobilePosition[mobilePosition]} ${$open ? style.open : style.close} scrollbar`), true) + " svelte-m2bisa"}"><div class="${escape(null_to_empty(style.container), true) + " svelte-m2bisa"}">${validate_component(Header, "SidenavHeader").$$render($$result, {}, {}, {})}
		${validate_component(Items, "SidenavItems").$$render($$result, {}, {}, {})}</div>
</aside>`;
});
const Layout$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  console.log("open---->", $open);
  const style = {
    container: `bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden relative`,
    mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
    main: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm mt-5 h-screen overflow-auto pb-36 pt-4 ml-5 mr-5 px-2 md:pb-8 md:pt-4 lg:pt-2 lg:px-4`
  };
  $$unsubscribe_open();
  return `<div${add_attribute("class", style.container, 0)}>${validate_component(Index$1, "TopNavigation").$$render($$result, {}, {}, {})}
	<div class="flex items-start">${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}
		${validate_component(Index, "SideNavigation").$$render($$result, { mobilePosition: "right" }, {}, {})}
		<div${add_attribute("class", $open ? "lg:pl-64 w-full " : "lg:pl-24 w-full", 0)}><main${add_attribute("class", style.main, 0)}>${slots.default ? slots.default({}) : ``}</main></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout$1, "LayoutAdmin").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
