import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// App-level error handler for errors from descendant components.

app.config.errorHandler = (err: unknown) => {
  console.log(err);
};

app.mount("#app");
