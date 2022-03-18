import { ref, computed } from "vue";
import { useStore } from "vuex";

export function useLayout() {
  const $store = useStore();

  const sidebarOpen = computed({
    get: () => $store.state.layout.sidebarOpen,
    set: (value) => $store.commit("layout/setSidebarOpen", value),
  });
  const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value);

  const hasToolbar = computed({
    get: () => $store.state.layout.hasToolbar,
    set: (value) => $store.commit("layout/setHasToolbar", value),
  });

  const toolbarOpen = computed({
    get: () => $store.state.layout.toolbarOpen,
    set: (value) => $store.commit("layout/setToolbarOpen", value),
  });
  const toggleToolbar = () => (toolbarOpen.value = !toolbarOpen.value);

  const fieldDesign = computed({
    get: () => $store.state.layout.fieldDesign,
    set: (value) => $store.commit("layout/setFieldDesign", value),
  });

  const fieldBorder = computed({
    get: () => $store.state.layout.fieldBorder,
    set: (value) => $store.commit("layout/setFieldBorder", value),
  });

  return {
    sidebarOpen,
    toggleSidebar,
    hasToolbar,
    toolbarOpen,
    toggleToolbar,
    fieldDesign,
    fieldBorder,
  };
}
