import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/styles/main.css";

import { useSocket } from "./hooks/useSocket";
useSocket();

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");

// create socket connection and grab initial data
