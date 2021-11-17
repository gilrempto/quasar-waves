<template>
  <w-page>
    <h1>Forms</h1>

    <h2 id="login">Login</h2>
    <w-form-login></w-form-login>

    <h2 id="register">Register</h2>
    <w-form-register></w-form-register>

    <h2 id="forget-password">Forget Password</h2>
    <w-form-forget-password></w-form-forget-password>
  </w-page>

  <q-drawer v-model="toolbarOpen" show-if-above bordered side="right">
    <q-scroll-area class="fit">
      <q-list>
        <q-item to="#login" clickable v-ripple>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="#register" clickable v-ripple>
          <q-item-section>
            <q-item-label>Register</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="#forget-password" clickable v-ripple>
          <q-item-section>
            <q-item-label>Forget Password</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
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
