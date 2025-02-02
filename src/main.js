import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import du JavaScript

import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'; // import Bootstrap vue3

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(createPinia());
app.mount('#app');

