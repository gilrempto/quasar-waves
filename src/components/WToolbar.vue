<template>
  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
    <q-scroll-area class="fit">
      <slot></slot>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const $store = useStore();

    const toolbarOpen = computed({
      get: () => $store.state.layout.toolbarOpen,
      set: (value) => $store.commit("layout/setToolbarOpen", value),
    });

    return {
      toolbarOpen,
    };
  },
});
</script>
