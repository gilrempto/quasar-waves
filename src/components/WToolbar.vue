<template>
  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
    <q-scroll-area class="fit">
      <slot></slot>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent } from "vue";
import { useLayout } from "composables/layout";

export default defineComponent({
  setup() {
    const { toolbarOpen } = useLayout();

    return {
      toolbarOpen,
    };
  },
});
</script>
