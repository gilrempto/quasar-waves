<template>
  <q-card square>
    <q-toolbar class="q-px-lg q-pt-lg">
      <q-avatar size="32px">
        <img src="icons/favicon-128x128.png" alt="Waves" />
      </q-avatar>
      <q-toolbar-title>Sign in to continue</q-toolbar-title>
    </q-toolbar>
    <q-card-section class="q-pa-lg">
      <q-form @submit="onSubmit" novalidate class="q-gutter-sm">
        <w-input
          v-model="model.email"
          :rules="rules.email"
          lazy-rules
          type="email"
          label="Email"
        >
          <template v-slot:prepend>
            <q-icon name="las la-envelope"></q-icon>
          </template>
        </w-input>

        <w-input
          v-model="model.password"
          :rules="rules.password"
          lazy-rules
          type="password"
          label="Password"
        >
          <template v-slot:prepend>
            <q-icon name="las la-key"></q-icon>
          </template>
        </w-input>

        <div class="row q-mb-sm">
          <q-btn
            type="submit"
            label="Sign in"
            color="primary"
            class="full-width"
          ></q-btn>
        </div>

        <div class="row justify-between items-center q-gutter-md">
          <q-checkbox v-model="model.remember" label="Remember me"></q-checkbox>
          <div>
            <router-link to="forget-password">Forgot password?</router-link>
          </div>
        </div>
      </q-form>
      <p class="text-center q-mt-sm">
        Don't have an account?
        <router-link to="register">Register</router-link>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useValidation } from "composables/validation";
import WInput from "components/WInput.vue";

const model = reactive({
  email: "",
  password: "",
  remember: false,
});

const { required, isEmail } = useValidation();
const rules = {
  email: [required, isEmail],
  password: [required],
};

const $router = useRouter();
const onSubmit = function () {
  $router.push("/");
};
</script>
