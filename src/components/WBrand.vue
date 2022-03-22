<template>
  <q-toolbar>
    <q-avatar>
      <svg
        width="32"
        height="32"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="!round"
          d="M45.2359 32.6872L90.3749 124.125L72.0217 160.7L8.03333 32.6872H45.2359Z"
          class="color-1"
        />
        <path
          v-if="!round"
          d="M92.3859 32.6872L137.525 124.125L119.172 160.7L55.1833 32.6872H92.3859Z"
          class="color-2"
        />
        <path
          v-if="!round"
          d="M142.65 113.579L183.187 32.5889H102.113L142.65 113.579Z"
          class="color-3"
        />
        <path
          v-if="round"
          d="M36.6753 32.497C40.5218 32.497 44.0274 34.7032 45.6913 38.1712L89.2932 129.047C90.615 131.802 90.6047 135.01 89.2653 137.756L80.7052 155.308C77.0499 162.803 66.3664 162.795 62.7225 155.294L10.0459 46.8668C6.81918 40.2251 11.6565 32.497 19.0406 32.497H36.6753Z"
          class="color-1"
        />
        <path
          v-if="round"
          d="M87.2494 32.497C91.0959 32.497 94.6014 34.7032 96.2654 38.1712L139.867 129.047C141.189 131.802 141.179 135.01 139.839 137.756L131.279 155.308C127.624 162.803 116.941 162.795 113.297 155.294L60.6199 46.8668C57.3932 40.2251 62.2306 32.497 69.6146 32.497H87.2494Z"
          class="color-2"
        />
        <path
          v-if="round"
          d="M138.465 103.284C142.114 110.785 152.801 110.785 156.45 103.284L183.945 46.7631C187.177 40.121 182.339 32.3885 174.953 32.3885H119.961C112.575 32.3885 107.738 40.121 110.969 46.7631L138.465 103.284Z"
          class="color-3"
        />
      </svg>
    </q-avatar>
    <q-toolbar-title>{{ title }}</q-toolbar-title>
  </q-toolbar>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Waves App",
  },
  round: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.color-1 {
  fill: #fff;
}
.color-2 {
  fill: #fff;
}
.color-3 {
  fill: #fff;
}
</style>
