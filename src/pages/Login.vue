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
      <w-form-login></w-form-login>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WFormLogin from "components/forms/WFormLogin.vue";

export default defineComponent({
  name: "LoginPage",

  components: { WFormLogin },

  setup() {},
});
</script>
