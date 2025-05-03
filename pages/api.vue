<template>
  <section class="max-w-2xl mx-auto py-12 text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      Nuxt API Fetch + Toast
    </h1>

    <button
      class="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition hover:cursor-pointer"
      @click="handleClick"
    >
      {{ message ? "Clear Message" : "Fetch Message" }}
    </button>

    <div class="mt-6 space-y-2">
      <p v-if="loading" class="text-yellow-500">⏳ Loading...</p>
      <p v-if="error" class="text-red-600 font-medium">❌ {{ error }}</p>
      <p v-if="message" class="text-green-700 font-medium">✅ {{ message }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
const error = ref(null);
const loading = ref(false);

const loadMessage = async () => {
  loading.value = true;
  error.value = null;

  try {
    const { data, error: fetchError } = await useFetch("/api/hello", {
      method: "GET",
    });

    if (fetchError.value) throw fetchError.value;

    message.value = data.value?.message || "No message";
  } catch (err) {
    error.value = err.message || "Unknown error";
  } finally {
    loading.value = false;
  }
};

const handleClick = () => {
  if (message.value) {
    message.value = "";
    error.value = null;
  } else {
    loadMessage();
  }
};
</script>
