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
import { defineComponent } from "vue";
import { useLayout } from "composables/layout";

export default defineComponent({
  name: "WHeader",

  setup() {
    const { toggleSidebar, toggleToolbar } = useLayout();

    return {
      toggleSidebar,
      toggleToolbar,
    };
  },
});
</script>
