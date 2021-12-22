<template>
  <q-field
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
  </q-field>
</template>

<script>
import { defineComponent } from "vue";
import { useLayout } from "composables/layout";

export default defineComponent({
  name: "WInput",

  setup() {
    const { fieldDesign, fieldBorder } = useLayout();

    return {
      fieldDesign,
      fieldBorder,
    };
  },
});
</script>
