export function useAuth() {
  const isAuthenticated = useState("isAuthenticated", () => false);
  const router = useRoute();

  const login = () => (isAuthenticated.value = true);
  const logout = () => {
    isAuthenticated.value = false;
    console.log(router.path);
    if (router.path == "/admin") {
      navigateTo("/"); // ✅ Redirect on logout
    }
  };

  return { isAuthenticated, login, logout };
}
