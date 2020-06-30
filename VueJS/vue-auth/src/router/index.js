import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inicio.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/editar/:id",
    name: "Editar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Editar.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/acceso",
    name: "Acceso",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Acceso.vue"),
  },
  {
    path: "/agregar",
    name: "Agregar",
    component: () =>
      import(/* webpackChunkName: "editar" */ "../views/Agregar.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

import { auth } from "../firebase";

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = auth.currentUser;
    // Si el usuario no está logeado le manda a Acceso
    if (user) {
      next();
    } else {
      next({ path: "/acceso" });
    }
  } else {
    // Si la ruta no requiere autenticación deja al usuario que acceda
    next();
  }
});

export default router;
