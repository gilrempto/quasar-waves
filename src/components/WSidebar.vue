<template>
  <q-drawer v-model="sidebarOpen" show-if-above bordered>
    <q-list>
      <w-sidebar-item
        v-for="item in items"
        :key="item.label"
        :label="item.label"
        :link="item.link"
        :icon="item.icon"
        :children="item.children"
        :level="0"
      ></w-sidebar-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import WSidebarItem from "./WSidebarItem.vue";

export default defineComponent({
  name: "WSidebar",

  components: {
    WSidebarItem,
  },

  props: {
    items: Array,
  },

  setup() {
    const $store = useStore();

    const sidebarOpen = computed({
      get: () => $store.state.layout.sidebarOpen,
      set: (value) => $store.commit("layout/setSidebarOpen", value),
    });

    return {
      sidebarOpen,
    };
  },
});
</script>
