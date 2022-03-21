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

<script setup>
import { defineProps } from "vue";
import { useLayout } from "composables/layout";
import WSidebarItem from "./WSidebarItem.vue";

const props = defineProps({
  items: Array,
});

const { sidebarOpen } = useLayout();
</script>
