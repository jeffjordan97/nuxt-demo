export default defineNuxtRouteMiddleware((to) => {
  const isAuthenticated = useState("isAuthenticated");

  if (to.path === "/admin" && !isAuthenticated.value) {
    return navigateTo("/");
  }
});
