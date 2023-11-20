import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import Pusher from 'pusher-js';

// const pusher = new Pusher('f00e080329b5b3f8a62f', {
//   cluster: 'ap2',
// });



createApp(App).use(store).use(router).mount("#app");
