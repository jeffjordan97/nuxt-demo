<template>
  <Card
    class="h-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200 transition duration-200 hover:border-gray-100 flex flex-col transform hover:scale-105"
  >
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex-grow">
      <slot />
    </CardContent>
    <CardFooter>
      <NuxtLink
        to="/"
        class="w-full rounded-md bg-purple-300 text-purple-800 hover:cursor-pointer"
      >
        <Button class="w-full">
          View Demo
          <ArrowRight class="ml-2 h-4 w-4" />
        </Button>
      </NuxtLink>
    </CardFooter>
  </Card>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
