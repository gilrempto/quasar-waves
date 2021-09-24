<template>
  <q-layout view="lHh Lpr lFf">
    <w-header> </w-header>

    <w-sidebar></w-sidebar>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from "vue";
import WHeader from "components/WHeader.vue";
import WSidebar from "src/components/WSidebar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    WHeader,
    WSidebar,
  },

  setup() {},
});
</script>
