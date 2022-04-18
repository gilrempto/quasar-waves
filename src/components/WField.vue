<template>
  <q-field
    :filled="fieldDesign === 'filled'"
    :outlined="fieldDesign === 'outlined'"
    :standout="fieldDesign === 'standout'"
    :borderless="fieldDesign === 'borderless'"
    :square="fieldBorder === 'square'"
    :rounded="fieldBorder === 'rounded'"
    class="w-field"
  >
    <template v-for="(_, slot) in $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </q-field>
</template>

<script setup>
import { useLayout } from "../composables/layout";

const { fieldDesign, fieldBorder } = useLayout();
</script>

<style lang="scss">
.w-field {
  .q-checkbox__inner {
    width: 0.5em;
    min-width: 0.5em;
    height: 0.5em;
    .q-checkbox__bg {
      left: 5%;
      top: 5%;
      width: 90%;
      height: 90%;
    }
  }
  .q-checkbox__inner--falsy,
  .q-checkbox__label {
    color: $input-label-color;
  }
  .q-checkbox__label {
    font-size: 16px;
    padding-left: 12px;
  }
  &.q-field--standout.q-field--highlighted {
    .q-checkbox__inner.q-checkbox__inner--falsy {
      color: #fff;
    }
    .q-checkbox__label {
      color: $primary;
    }
  }
  &.q-field--error {
    .q-checkbox__label {
      color: $negative !important;
    }
  }
}
</style>
