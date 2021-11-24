import { computed } from "vue";
import { useStore } from "vuex";

export function useLayout() {
  const $store = useStore();

  const sidebarOpen = computed({
    get: () => $store.state.layout.sidebarOpen,
    set: (value) => $store.commit("layout/setSidebarOpen", value),
  });
  const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value);

  const toolbarOpen = computed({
    get: () => $store.state.layout.toolbarOpen,
    set: (value) => $store.commit("layout/setToolbarOpen", value),
  });
  const toggleToolbar = () => (toolbarOpen.value = !toolbarOpen.value);

  return {
    sidebarOpen,
    toggleSidebar,
    toolbarOpen,
    toggleToolbar,
  };
}
