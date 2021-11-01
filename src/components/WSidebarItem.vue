<template>
  <q-expansion-item
    v-if="children"
    :label="label"
    :icon="icon ? icon : 'radio_button_unchecked'"
    :header-inset-level="headerInsetLevel"
  >
    <q-list>
      <w-sidebar-item
        v-for="item in children"
        :key="item.label"
        :label="item.label"
        :link="item.link"
        :icon="item.icon"
        :children="item.children"
        :level="level + 1"
      ></w-sidebar-item>
    </q-list>
  </q-expansion-item>
  <q-item
    v-else
    :to="link !== '#' ? link : ''"
    :inset-level="insetLevel"
    clickable
  >
    <q-item-section avatar>
      <q-icon :name="icon ? icon : 'radio_button_unchecked'"></q-icon>
    </q-item-section>
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "WSidebarItem",

  props: {
    label: String,
    link: String,
    icon: String,
    children: Array,
    level: Number,
  },

  setup(props) {
    const headerInsetLevel = computed(() =>
      props.level > 0 ? props.level / 3 : 0
    );

    const insetLevel = computed(() => props.level / 3);

    return {
      headerInsetLevel,
      insetLevel,
    };
  },
});
</script>
