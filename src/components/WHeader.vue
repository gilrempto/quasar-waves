<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="las la-bars"
        aria-label="Menu"
        @click="toggleSidebar"
      />

      <q-toolbar-title>
        <slot name="brand"> Waves App </slot>
      </q-toolbar-title>

      <q-btn
        flat
        dense
        round
        icon="las la-tools"
        aria-label="Menu"
        @click="toggleToolbar"
      />
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

    const toolbarOpen = computed({
      get: () => $store.state.layout.toolbarOpen,
      set: (value) => $store.commit("layout/setToolbarOpen", value),
    });

    function toggleToolbar() {
      toolbarOpen.value = !toolbarOpen.value;
    }

    return {
      toggleSidebar,
      toggleToolbar,
    };
  },
});
</script>
