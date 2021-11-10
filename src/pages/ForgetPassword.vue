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
      <w-form-forget-password></w-form-forget-password>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WFormForgetPassword from "src/components/forms/WFormForgetPassword.vue";

export default defineComponent({
  name: "ForgetPasswordPage",

  components: {
    WFormForgetPassword,
  },

  setup() {},
});
</script>
