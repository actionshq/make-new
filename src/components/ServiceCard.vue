<template>
  <div class="flex flex-col h-full rounded-lg border border-gray-200 bg-white">
    <div class="flex justify-center p-4 rounded-t-lg bg-gray-50">
      <div class="rounded-full bg-white p-4 border border-gray-200">
        <img width="32" v-if="service.icon" :src="service.icon" />
      </div>
    </div>
    <h3 class="p-4 text-sm font-medium text-gray-700">
      {{ service.name }}
    </h3>
    <LinkButton
      :href="service.url"
      type="primary"
      class="rounded-none rounded-b-lg"
      >use</LinkButton
    >
  </div>
</template>

<script setup lang="ts">
import type { Service } from "@/models/Service"
import LinkButton from "./LinkButton.vue"

defineProps<{
  service: Service
}>()
</script>

<style></style>
