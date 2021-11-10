<template>
  <div
    class="
      row
      fullscreen
      wrap
      justify-center
      items-center
      scroll
      q-pa-lg
      bg-grey-2
    "
  >
    <div class="col-xs-12 col-sm-9 col-md-5 col-lg-4">
      <w-form-register></w-form-register>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WFormRegister from "components/forms/WFormRegister.vue";

export default defineComponent({
  name: "RegisterPage",

  components: {
    WFormRegister,
  },

  setup() {},
});
</script>
