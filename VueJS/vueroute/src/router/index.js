import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/fotos/:id",
    name: "Fotos",
    component: () => import("../views/Fotos.vue"),
  },
  {
    path: "/grid",
    name: "Grid",
    component: () => import("../views/Grid.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("../views/Cards.vue"),
  },
  {
    path: "/formularios",
    name: "Formularios",
    component: () => import("../views/Formularios.vue"),
  },
  {
    path: "/validacion",
    name: "Validacion",
    component: () => import("../views/Validacion.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
