export function usePageVisibility() {
  const isVisible = useState("isVisible", () => true); // default to visible

  const update = () => {
    if (process.client) {
      isVisible.value = document.visibilityState === "visible";
    }
  };

  onMounted(() => {
    if (process.client) {
      isVisible.value = document.visibilityState === "visible";
      document.addEventListener("visibilitychange", update);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      document.removeEventListener("visibilitychange", update);
    }
  });

  return { isVisible };
}
