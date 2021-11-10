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
        <q-toolbar class="q-px-lg q-pt-lg">
          <q-avatar size="32px">
            <img src="icons/favicon-128x128.png" alt="Waves" />
          </q-avatar>
          <q-toolbar-title>Sign in to continue</q-toolbar-title>
        </q-toolbar>
        <q-card-section class="q-pa-lg">
          <q-form @submit="onSubmit" novalidate class="q-gutter-sm">
            <q-input autofocus type="email" v-model="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="las la-envelope"></q-icon>
              </template>
            </q-input>

            <q-input type="password" v-model="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="las la-key"></q-icon>
              </template>
            </q-input>

            <div class="row q-mb-sm">
              <q-btn
                type="submit"
                label="Sign in"
                color="primary"
                class="full-width"
              ></q-btn>
            </div>

            <div class="row justify-between items-center q-gutter-md">
              <q-checkbox v-model="remember" label="Remember me"></q-checkbox>
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
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const $router = useRouter();

    const email = ref("");
    const password = ref("");
    const remember = ref(false);

    const onSubmit = function () {
      $router.push("/");
    };

    return {
      email,
      password,
      remember,
      onSubmit,
    };
  },
});
</script>
