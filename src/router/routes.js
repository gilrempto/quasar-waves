const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Dashboard.vue") },
    ],
  },
  {
    path: "/forms",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Forms.vue") }],
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
  },
  {
    path: "/forget-password",
    component: () => import("pages/ForgetPassword.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
