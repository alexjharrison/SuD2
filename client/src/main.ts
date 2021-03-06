import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import dotenv from "dotenv";
dotenv.config();

import "./assets/styles/main.css";

import { useSocket } from "./socket";
useSocket();

createApp(App).use(router).use(createPinia()).mount("#app");
