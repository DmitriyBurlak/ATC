import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as fetch from "./js/fetch.js";

import "./scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
});

fetch.request();
