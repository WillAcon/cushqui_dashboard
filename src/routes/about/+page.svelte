<script>
    import { onMount } from 'svelte';
    import WebSocket from '$lib/store/store.js';
	import { enhance } from '$app/forms';

    let message = '';
    let inputMessage = '';

    onMount(() => {
     
      WebSocket.subscribe(msg => {
        message = msg;
      });
    });

    // function sendMessage() {
    //   if (inputMessage !== '') {
    //     WebSocket.sendMessage(inputMessage);
    //     inputMessage = '';
    //   }
    // }
  </script>

  <h1>WebSocket Example</h1>

  <div>
    <p>Message: {message}</p>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
    use:enhance
    method="POST" 
    action="?/save">
        <input type="text" bind:value={inputMessage} name="message">
        <input type="hidden" value="williams" name="user">
        <input type="hidden" value="message" name="action">

        <button type="submit"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            Registrar
          </button>
    </form>

  </div>

  <div>
    <div id="cola1"></div>
	<!-- <div id="cola2"></div> -->


    <div class="px-3">
        <div class="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5">
          <div class="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">Contacts</div>
          <div class="overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5 pt-11">
            <div id="cola2">
            </div>
          </div>
        </div>
      </div>
      
  </div>