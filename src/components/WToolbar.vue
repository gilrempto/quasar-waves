<template>
  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
    <q-scroll-area class="fit">
      <slot></slot>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { useLayout } from "composables/layout";

const { toolbarOpen } = useLayout();
</script>
