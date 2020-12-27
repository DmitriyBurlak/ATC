import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TwoPage from "../views/TwoPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/two-page",
    name: "two-page",
    component: TwoPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
