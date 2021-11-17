<template>
  <q-card square>
    <q-toolbar class="q-pl-lg q-pt-lg">
      <q-avatar size="32px">
        <img src="icons/favicon-128x128.png" alt="Waves" />
      </q-avatar>
      <q-toolbar-title>Forget password</q-toolbar-title>
    </q-toolbar>
    <q-card-section class="q-pa-lg">
      <p class="q-mb-lg">
        Enter your email address and it will be reset and sent to you.
      </p>
      <q-form @submit="onSubmit" novalidate class="q-gutter-sm">
        <q-input type="email" v-model="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="las la-envelope"></q-icon>
          </template>
        </q-input>

        <div class="row q-mb-sm">
          <q-btn
            type="submit"
            label="Send new password"
            color="primary"
            class="full-width"
          ></q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "WFormForgetPassword",

  setup() {
    const $router = useRouter();

    const email = ref("");

    const onSubmit = function () {
      $router.push("/login");
    };

    return {
      email,
      onSubmit,
    };
  },
});
</script>
