import { writable } from 'svelte/store';

// // Función para conectarse al websocket
// function connectWebSocket(queue_name) {
//     let url = `ws://127.0.0.1:8000/ws`;
//     let ws = new WebSocket(url);

//     // Se muestra el mensaje recibido en el div correspondiente
//     ws.onmessage = function(event) {
//         let data = JSON.parse(event.data);
// console.log("mensajes recibido", data)
//         if (data.channel === "cola1") {
//             let cola1Div = document.getElementById("cola1");
//             cola1Div.innerHTML += `<p>${data.message}</p>`;
//         } else if (data.channel === "cola2") {
//             let cola2Div = document.getElementById("cola2");
//             cola2Div.innerHTML += `<p>${data.message}</p>`;
//         }
//     };
// }

/** @type {import('./$types').PageServerLoad} */
export async function prueba({ locals }) {
	console.log("page server1",locals);
}

// // Conexión a las colas
// connectWebSocket("cola1");

const messageStore = writable('');
let socket;

if (typeof process === 'undefined') {
  // Esto se ejecuta en el navegador
    // socket = new WebSocket(`ws://127.0.0.1:8000/user/${id}`);
    var usuario = Math.floor(Math.random() * (100 - 1) + 1);
    var id_usuario = usuario.toString();
    var id_usuario = 122;
    console.log(id_usuario);

    socket = new WebSocket(`ws://localhost:8000/user/${id_usuario}`);
    var token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    // socket = new WebSocket(`ws://localhost:8000/user/${id_usuario}`, ["Authorization", `Bearer ${token}`]);
    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log("It's open xxxxxx",event);
        socket.send(token); // Envía e
    });

    socket.addEventListener('message', function (event) {
        let data = JSON.parse(event.data);
        console.log("data nn",data);

        if (data.channel === "cola1") {
            let cola1Div = document.getElementById("cola1");
            cola1Div.innerHTML += `<p>${data.message}</p>`;
        } else if (data.channel == id_usuario) {
            let cola2Div = document.getElementById("cola2");

            let images = [
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            ];
            let random = Math.floor(Math.random() * images.length);
            console.log("random",random)
            let htmlTemp = `
            <div class="flex items-center gap-4 p-4">
            <img class="w-12 h-12 rounded-full" src="${images[random]}">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">${data.message}</strong>
            </div>`;
            cola2Div.innerHTML += htmlTemp;
        }
    });
} else {
  // Esto se ejecuta en Node.js
  console.log("Estás ejecutando este código en Node.js");
}

const sendMessage = (message) => {
    console.log("Estás ejecutando este",message);
    // socket.send(message);
    socket.send(JSON.stringify({
      "topic": "message",
      "channel":"canal1",
      "data": message
    }));
}

export default {
    subscribe: messageStore.subscribe,
    sendMessage
}