import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
});

let items = document.querySelectorAll(".item");
let btn = document.querySelector(".main__button");

let classDel = (items) => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};
console.log(items);
items.forEach((item) => {
  item.addEventListener("click", () => {
    classDel(items);
    item.classList.add("active");
    btn.removeAttribute("disabled");
  });
});
