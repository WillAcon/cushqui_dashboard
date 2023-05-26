import { writable } from 'svelte/store';
import { readCookie, writeCookie } from '$lib/utils/cookie';
import { readLocalStorage, writeLocalStorage } from '$lib/utils/storage';


const myStorage= readLocalStorage('sidebar') || '';
const boolValue = (/true/i).test(myStorage) //returns true
console.log("myStorage",boolValue);

const open = writable(boolValue);
open.subscribe(value => {
  writeLocalStorage('sidebar', value);
});




const myStorage_demo = readCookie('sidebar_uno') || '';
const boolValue_demo = (/true/i).test(myStorage_demo);

const open_ew = writable(boolValue_demo);

open_ew.subscribe(value => {
  console.log("open_ew",value);
  writeCookie('sidebar_uno', value);
});


function updateCart() {
  console.log("updateCart");
  const currentCart = readCookie('sidebar_uno');
  if (currentCart) {
    const demo = (/true/i).test(currentCart);
    open_ew.set(demo);
  }
}

updateCart();
// setInterval(updateCart, 5000); 

const dark_theme = readLocalStorage('color-theme') || 'light';
const dark_event = writable(dark_theme);

dark_event.subscribe(value => {
  writeLocalStorage('color-theme', value);
});

if (typeof window !== 'undefined') {
  console.log("open_ew 36666");
  // Escuchar los cambios de almacenamiento desde otras pestañas
  window.addEventListener('storage', event => {
    console.log("open_ew EVENT",event);
    if (event.key === 'sidebar_uno') {
      open_ew.set((/true/i).test(event.newValue));
    }
    if (event.key === 'sidebar') {
      open.set((/true/i).test(event.newValue));
      updateCart();
    }
    if (event.key === 'color-theme') {
      console.log("event.key",event.key)
      if (event.oldValue === "dark") {
      console.log("newValue.key",event.newValue)
        window.document.documentElement.classList.remove("dark");
        window.document.documentElement.classList.add("light");
        dark_event.set(event.newValue);
      } else {
        console.log("newValue.keyaaaaas",event.newValue)
        window.document.documentElement.classList.remove("light");
        window.document.documentElement.classList.add("dark");
        dark_event.set(event.newValue);
      }
    }
    

  });
}

// export { open };

export { open, open_ew };