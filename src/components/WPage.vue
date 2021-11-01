<template>
  <q-page padding class="w-page">
    <slot name="default"></slot>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "WPage",

  setup() {},
});
</script>

<style lang="scss">
.w-page {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
</style>
