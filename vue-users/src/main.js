import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// createApp : Root Vue 객체 생성
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
