<template>
  <div class="flex flex-col min-h-screen bg-gray-950">
    <header class="bg-gray-900 border-b border-gray-800">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NuxtLink
                    to="/"
                    class="text-white hover:text-gray-200 transition-colors font-semibold"
                  >
                    🚀 Nuxt App
                  </NuxtLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div class="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NuxtLink
                    to="/"
                    class="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                  >
                    Home
                  </NuxtLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NuxtLink
                    to="/about"
                    class="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                  >
                    About
                  </NuxtLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NuxtLink
                    to="/features"
                    class="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
                  >
                    Features
                  </NuxtLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors inline-block"
                    @click.prevent="goToAdmin"
                  >
                    Admin
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    as="a"
                    class="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200 transition-colors duration-200 min-w-[100px] hover:cursor-pointer"
                    @click="toggleAuth"
                  >
                    {{ isAuthenticated ? "Logout" : "Login" }}
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer
      class="bg-gray-900 text-gray-400 text-center py-4 border-t border-gray-800"
    >
      &copy; {{ new Date().getFullYear() }} Jeff's Nuxt Demo App.
    </footer>
  </div>
</template>

<script setup>
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const { isAuthenticated, login, logout } = useAuth();

const toggleAuth = () => {
  if (isAuthenticated.value) logout();
  else login();
};

const goToAdmin = () => {
  if (isAuthenticated.value) {
    navigateTo("/admin");
  }
};
</script>
