<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleSidebar"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "WHeader",

  setup() {
    const $store = useStore();

    const sidebarOpen = computed({
      get: () => $store.state.layout.sidebarOpen,
      set: (value) => $store.commit("layout/setSidebarOpen", value),
    });

    function toggleSidebar() {
      sidebarOpen.value = !sidebarOpen.value;
    }

    return {
      toggleSidebar,
    };
  },
});
</script>
