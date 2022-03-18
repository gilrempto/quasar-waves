<template>
  <w-page has-toolbar>
    <h1>Forms</h1>

    <h2 id="login">Login</h2>
    <w-form-login></w-form-login>

    <h2 id="register">Register</h2>
    <w-form-register></w-form-register>

    <h2 id="forget-password">Forget Password</h2>
    <w-form-forget-password></w-form-forget-password>
  </w-page>

  <w-toolbar>
    <q-list>
      <q-item-label header>Design</q-item-label>
      <q-option-group
        :options="fieldDesigns"
        type="radio"
        v-model="fieldDesign"
        class="q-option-group--custom"
      ></q-option-group>

      <q-item-label header>Borders</q-item-label>
      <q-option-group
        :options="fieldBorders"
        type="radio"
        v-model="fieldBorder"
        class="q-option-group--custom"
      ></q-option-group>

      <q-item-label header>Examples</q-item-label>
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
  </w-toolbar>
</template>

<script>
import { defineComponent } from "vue";
import { useLayout } from "composables/layout";
import WPage from "components/WPage.vue";
import WToolbar from "components/WToolbar.vue";
import WFormLogin from "components/forms/WFormLogin.vue";
import WFormRegister from "components/forms/WFormRegister.vue";
import WFormForgetPassword from "components/forms/WFormForgetPassword.vue";

export default defineComponent({
  name: "FormsPage",

  components: {
    WPage,
    WToolbar,
    WFormLogin,
    WFormRegister,
    WFormForgetPassword,
  },

  setup() {
    const { fieldDesign, fieldBorder } = useLayout();

    const fieldDesigns = [
      { label: "Standard", value: "" },
      { label: "Filled", value: "filled" },
      { label: "Outlined", value: "outlined" },
      { label: "Standout", value: "standout" },
      { label: "Borderless", value: "borderless" },
    ];

    const fieldBorders = [
      { label: "Standard", value: "" },
      { label: "Square", value: "square" },
      { label: "Rounded", value: "rounded" },
    ];

    return {
      fieldDesign,
      fieldDesigns,
      fieldBorder,
      fieldBorders,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-option-group--custom {
  margin-left: 0px !important;
}
</style>
