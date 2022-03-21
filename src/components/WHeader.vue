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

      <q-toolbar-title>
        <slot name="brand"> Waves App </slot>
      </q-toolbar-title>

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

const { toggleSidebar, hasToolbar, toggleToolbar } = useLayout();
</script>
