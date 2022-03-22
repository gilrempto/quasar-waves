<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        @click="toggleSidebar"
        flat
        dense
        round
        icon="las la-bars"
        aria-label="Menu"
      />

      <slot name="brand">
        <w-brand></w-brand>
      </slot>

      <q-btn
        v-if="hasToolbar"
        @click="toggleToolbar"
        flat
        dense
        round
        icon="las la-tools"
        aria-label="Menu"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useLayout } from "composables/layout";
import WBrand from "components/WBrand.vue";

const { toggleSidebar, hasToolbar, toggleToolbar } = useLayout();
</script>
