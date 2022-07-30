/* import { createApp } from "vue"; */
import { createPinia } from "pinia";

import app from "./app";
import router from "./router";
import "./plugins";
import "./assets/scss/main.scss";

app.use(createPinia());
app.use(router);
app.mount("#app");
