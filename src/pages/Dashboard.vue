<template>
  <w-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </w-page>
</template>

<script>
import { defineComponent } from "vue";
import WPage from "components/WPage.vue";

export default defineComponent({
  name: "DashboardPage",

  components: {
    WPage,
  },
});
</script>
