<template>
  <w-page>
    <h1>Forms</h1>
    <q-card></q-card>
  </w-page>

  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
import WPage from "components/WPage.vue";

export default defineComponent({
  name: "PageForms",

  components: {
    WPage,
  },

  setup() {
    const toolbarOpen = ref(true);

    return {
      toolbarOpen,
    };
  },
});
</script>
