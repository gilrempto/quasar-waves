<template>
  <q-card square>
    <q-toolbar class="q-pl-lg q-pt-lg">
      <q-avatar size="32px">
        <img src="icons/favicon-128x128.png" alt="Waves" />
      </q-avatar>
      <q-toolbar-title>Sign up</q-toolbar-title>
    </q-toolbar>
    <q-card-section class="q-pa-lg">
      <q-form @submit="onSubmit" novalidate class="q-gutter-sm">
        <q-input
          v-model="model.fullName"
          :rules="rules.fullName"
          lazy-rules
          label="Full name"
        >
          <template v-slot:prepend>
            <q-icon name="las la-user"></q-icon>
          </template>
        </q-input>

        <q-input
          v-model="model.email"
          :rules="rules.email"
          lazy-rules
          type="email"
          label="E-mail"
        >
          <template v-slot:prepend>
            <q-icon name="las la-envelope"></q-icon>
          </template>
        </q-input>

        <q-input
          v-model="model.password"
          type="password"
          :rules="rules.password"
          lazy-rules
          label="Password"
        >
          <template v-slot:prepend>
            <q-icon name="las la-key"></q-icon>
          </template>
        </q-input>

        <q-input
          v-model="model.passwordConfirmation"
          :rules="rules.passwordConfirmation"
          lazy-rules
          type="password"
          label="Confirm password"
        >
          <template v-slot:prepend>
            <q-icon name="las la-check-double"></q-icon>
          </template>
        </q-input>

        <q-field :model-value="model.agreement" :rules="rules.agreement">
          <template v-slot:control>
            <q-checkbox
              v-model="model.agreement"
              dense
              label="I agree to the terms and conditions"
              class="q-ml-sm"
            ></q-checkbox>
          </template>
        </q-field>

        <div class="row">
          <q-btn
            type="submit"
            label="Sign up"
            color="primary"
            class="full-width"
          ></q-btn>
        </div>
      </q-form>
      <p class="text-center q-mt-md">
        Already have an account? <router-link to="login">Login</router-link>
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useValidation } from "composables/validation";

export default defineComponent({
  name: "WFormRegister",

  setup() {
    const model = reactive({
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      agreement: false,
    });

    const { required, isEmail } = useValidation();
    const passwordsMatch = (value) =>
      value === model.password || "Passwords didn’t match";
    const isAgreed = (value) =>
      required(value, "Please agree to the terms and conditions");
    const rules = {
      fullName: [required],
      email: [required, isEmail],
      password: [required],
      passwordConfirmation: [required, passwordsMatch],
      agreement: [isAgreed],
    };

    const $router = useRouter();
    const onSubmit = function () {
      $router.push("/");
    };

    return {
      model,
      rules,
      onSubmit,
    };
  },
});
</script>
