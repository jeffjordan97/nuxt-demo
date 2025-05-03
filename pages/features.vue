<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Nuxt 3 Core Features</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        v-for="feature in features"
        :key="feature.slug"
        :title="feature.title"
        :description="feature.description"
        link="/"
      />
    </div>
  </div>
</template>

<script setup>
// FeatureCard is auto-imported from components/

useHead({
  title: "Features",
});

const features = ref([
  {
    slug: "routing-demo",
    title: "Pages & Routing",
    description: "File-based routing, dynamic routes, navigation.",
  },
  {
    slug: "layouts-demo",
    title: "Layouts",
    description: "Define reusable page structures (default and custom).",
  },
  {
    slug: "components-demo",
    title: "Components",
    description: "Auto-imported components for UI reusability.",
  },
  {
    slug: "composables-demo",
    title: "Composables",
    description: "Reusable Composition API functions.",
  },
  {
    slug: "state-management-demo",
    title: "State Management",
    description: "Simple shared state using useState.",
  },
  {
    slug: "data-fetching-demo",
    title: "Data Fetching",
    description: "Fetching data using useFetch/useAsyncData.",
  },
  {
    slug: "api-routes-demo",
    title: "Server API Routes",
    description: "Creating API endpoints within Nuxt.",
  },
  {
    slug: "assets-demo",
    title: "Assets Handling",
    description: "Using static (public/) vs build-time (assets/) assets.",
  },
  {
    slug: "middleware-demo",
    title: "Middleware",
    description: "Running code before navigation.",
  },
  {
    slug: "plugins-demo",
    title: "Plugins",
    description: "Extending Nuxt/Vue functionality.",
  },
]);
</script>
