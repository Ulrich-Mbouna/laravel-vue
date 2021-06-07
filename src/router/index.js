import store from "@/store/index";
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth] },
    component: () =>
        import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/user",
    name: "user",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
  },
  {
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import(/* webpackChunkName: "users" */ "../views/Users"),
  },
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
        import(/* webpackChunkName: "register" */ "../views/Register"),
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    meta: { middleware: [guest] },
    component: () =>
        import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: () =>
        import(
            /* webpackChunkName: "forgot-password" */ "../views/ForgotPassword"
            ),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
        import(/* webpackChunkName: "not-found" */ "../views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authUser = store.getters["auth/authUser"];
  const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

  if (reqAuth && !authUser) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next(loginQuery);
      else next();
    });
  } else {
    next(); // make sure to always call next()!
  }
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});


export default router;
