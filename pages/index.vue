<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col">
    <header class="container mx-auto px-4 py-16 text-center">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500 mb-4"
      >
        Nuxt 80/20 Demo
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        Learn 80% of Nuxt by understanding 20% of its core features. This demo
        showcases the essential aspects of Nuxt.js to get you up and running
        quickly.
      </p>
      <a
        href="/features"
        class="bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Explore Features
        <!-- <ArrowRight class="ml-2 w-5 h-5" /> -->
      </a>
    </header>

    <!-- <main class="container mx-auto px-4 py-12">
      <h2
        class="text-3xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400"
      >
        Key Features
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="feature in features"
          :key="feature.title"
          class="bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <CardHeader>
            <div class="flex items-center gap-4">
              <component :is="feature.icon" class="w-6 h-6 text-blue-400" />
              <CardTitle class="text-lg font-semibold text-white">
                {{ feature.title }}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-gray-300 mb-4">
              {{ feature.description }}
            </CardDescription>
            <Button
              as="a"
              href="{feature.link}"
              class="w-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200 transition-colors duration-200"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </main> -->

    <!-- <section class="container mx-auto px-4 py-16 text-center">
      <h2
        class="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400"
      >
        About Nuxt.js
      </h2>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto">
        Nuxt.js is a powerful framework built on top of Vue.js that simplifies
        the process of building modern web applications. It provides a set of
        features and conventions that help developers create universal (SSR)
        applications, static sites, and more. This demo aims to give you a
        practical understanding of the core concepts.
      </p>
      <div class="mt-8">
        <Badge
          variant="secondary"
          class="bg-purple-500/20 text-purple-300 border-purple-500/30 mr-2"
        >
          Vue.js
        </Badge>
        <Badge
          variant="secondary"
          class="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
        >
          Server-Side Rendering (SSR)
        </Badge>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   ArrowRight,
//   BookOpen,
//   Code,
//   Layers,
//   LayoutDashboard,
//   Rocket,
//   Zap,
// } from "lucide-react";
// import features from "../content/features.json";
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
