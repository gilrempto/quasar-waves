<template>
  <q-input
    :filled="fieldDesign === 'filled'"
    :outlined="fieldDesign === 'outlined'"
    :standout="fieldDesign === 'standout'"
    :borderless="fieldDesign === 'borderless'"
    :square="fieldBorder === 'square'"
    :rounded="fieldBorder === 'rounded'"
  >
    <template v-for="(_, slot) in $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </q-input>
</template>

<script setup>
import { useLayout } from "../composables/layout";

const { fieldDesign, fieldBorder } = useLayout();
</script>
