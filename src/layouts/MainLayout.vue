<template>
  <q-layout view="lHh LpR lFf">
    <w-header> </w-header>

    <w-sidebar :items="sidebarItems"> </w-sidebar>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from "vue";
import WHeader from "components/WHeader.vue";
import WSidebar from "components/WSidebar.vue";

const sidebarItems = [
  {
    icon: "las la-chart-bar",
    label: "Dashboard",
    link: "/",
  },
  {
    icon: "las la-edit",
    label: "Forms",
    link: "/forms",
  },
  {
    icon: "las la-user",
    label: "User Pages",
    link: "#",
    children: [
      {
        label: "Login",
        link: "/login",
      },
      {
        label: "Register",
        link: "/register",
      },
      {
        label: "Forget password",
        link: "/forget-password",
      },
    ],
  },
  {
    icon: "las la-project-diagram",
    label: "Multilevel Sample",
    link: "#",
    children: [
      {
        label: "Level One",
        link: "#",
      },
      {
        label: "Level One",
        link: "#",
        children: [
          {
            label: "Level Two",
            link: "#",
          },
          {
            label: "Level Two",
            link: "#",
            children: [
              {
                label: "Level Three",
                link: "#",
              },
              {
                label: "Level Three",
                link: "#",
              },
            ],
          },
        ],
      },
      {
        label: "Level One",
        link: "#",
      },
    ],
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    WHeader,
    WSidebar,
  },

  setup() {
    return {
      sidebarItems,
    };
  },
});
</script>
