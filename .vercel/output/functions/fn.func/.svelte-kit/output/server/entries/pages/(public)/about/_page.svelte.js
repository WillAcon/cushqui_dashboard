import { c as create_ssr_component, g as escape, h as add_attribute } from "../../../../chunks/index3.js";
import { w as writable } from "../../../../chunks/index2.js";
import { P as PUBLIC_WS_BASE } from "../../../../chunks/public.js";
import "devalue";
const messageStore = writable("");
let socket;
if (typeof process === "undefined") {
  let id_usuario = 122;
  console.log(id_usuario);
  socket = new WebSocket(`${PUBLIC_WS_BASE}/user/${id_usuario}`);
  socket.addEventListener("open", function(event) {
    console.log("It's open xxxxxx", event);
  });
  socket.addEventListener("message", function(event) {
    let data = JSON.parse(event.data);
    console.log("data nn", data);
    if (data.channel === "cola1") {
      let cola1Div = document.getElementById("cola1");
      cola1Div.innerHTML += `<p>${data.message}</p>`;
    } else if (data.channel == "chatroom") {
      let cola2Div = document.getElementById("cola2");
      let images = [
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
      ];
      let random = Math.floor(Math.random() * images.length);
      console.log("random", random);
      let htmlTemp = `
            <div class="flex items-center gap-4 p-4">
            <img class="w-12 h-12 rounded-full" src="${images[random]}">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">${data.message}</strong>
            </div>`;
      cola2Div.innerHTML += htmlTemp;
    }
  });
} else {
  console.log("Estás ejecutando este código en Node.js");
}
const sendMessage = (message) => {
  console.log("Estás ejecutando este", message);
  socket.send(
    JSON.stringify({
      topic: "message",
      channel: "canal1",
      data: message
    })
  );
};
({
  subscribe: messageStore.subscribe,
  sendMessage
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message = "";
  let inputMessage = "";
  return `<h1>WebSocket Example</h1>

<div><p>Message: ${escape(message)}</p>
	<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="?/save"><input type="text" name="message"${add_attribute("value", inputMessage, 0)}>
		<input type="hidden" value="williams" name="user">
		<input type="hidden" value="message" name="action">

		<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrar
		</button></form></div>

<div><div id="cola1"></div>
	

	<div class="px-3"><div class="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5"><div class="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">Contacts
			</div>
			<div class="overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5 pt-11"><div id="cola2"></div></div></div></div></div>`;
});
export {
  Page as default
};
