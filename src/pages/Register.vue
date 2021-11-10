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
      <q-card square>
        <q-toolbar class="q-pl-lg q-pt-lg">
          <q-avatar size="32px">
            <img src="icons/favicon-128x128.png" alt="Waves" />
          </q-avatar>
          <q-toolbar-title>Sign up</q-toolbar-title>
        </q-toolbar>
        <q-card-section class="q-pa-lg">
          <q-form @submit="onSubmit" novalidate class="q-gutter-sm">
            <q-input autofocus v-model="fullName" label="Full name">
              <template v-slot:prepend>
                <q-icon name="las la-user"></q-icon>
              </template>
            </q-input>

            <q-input type="email" v-model="email" label="E-mail">
              <template v-slot:prepend>
                <q-icon name="las la-envelope"></q-icon>
              </template>
            </q-input>

            <q-input type="password" v-model="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="las la-key"></q-icon>
              </template>
            </q-input>

            <q-input
              type="password"
              v-model="passwordConfirmation"
              label="Confirm password"
            >
              <template v-slot:prepend>
                <q-icon name="las la-check-double"></q-icon>
              </template>
            </q-input>

            <q-field :model-value="agreement">
              <template v-slot:control>
                <q-checkbox
                  dense
                  v-model="agreement"
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
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Register",

  setup() {
    const $router = useRouter();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    const agreement = ref(false);

    const onSubmit = function () {
      $router.push("/");
    };

    return {
      fullName,
      email,
      password,
      passwordConfirmation,
      agreement,
      onSubmit,
    };
  },
});
</script>
