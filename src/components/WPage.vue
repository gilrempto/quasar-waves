<template>
  <q-page padding class="w-page">
    <slot name="default"></slot>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useLayout } from "../composables/layout";

const props = defineProps({
  hasToolbar: {
    type: Boolean,
    default: false,
  },
});

const { hasToolbar } = useLayout();

hasToolbar.value = ref(props.hasToolbar);
</script>

<style lang="scss">
.w-page {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
</style>
