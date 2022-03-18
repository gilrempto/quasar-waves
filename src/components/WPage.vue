<template>
  <q-page padding class="w-page">
    <slot name="default"></slot>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useLayout } from "composables/layout";

export default defineComponent({
  name: "WPage",

  props: {
    hasToolbar: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { hasToolbar } = useLayout();

    hasToolbar.value = ref(props.hasToolbar);

    return {};
  },
});
</script>

<style lang="scss">
.w-page {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
</style>
