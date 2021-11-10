<template>
  <w-page>
    <h1>Forms</h1>

    <div class="q-gutter-md">
      <w-form-login></w-form-login>

      <w-form-register></w-form-register>

      <w-form-forget-password></w-form-forget-password>
    </div>
  </w-page>

  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
import WPage from "components/WPage.vue";
import WFormLogin from "components/forms/WFormLogin.vue";
import WFormRegister from "components/forms/WFormRegister.vue";
import WFormForgetPassword from "src/components/forms/WFormForgetPassword.vue";

export default defineComponent({
  name: "PageForms",

  components: {
    WPage,
    WFormLogin,
    WFormRegister,
    WFormForgetPassword,
  },

  setup() {
    const toolbarOpen = ref(true);

    return {
      toolbarOpen,
    };
  },
});
</script>
