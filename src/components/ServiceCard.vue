<template>
  <div
    class="flex flex-col h-full rounded-lg border bg-gray-50 border-gray-200"
  >
    <div class="flex justify-center p-4 rounded-t-lg">
      <div
        class="flex justify-center items-center rounded-full bg-white border border-gray-200 w-16 h-16"
      >
        <img
          v-if="service.icon.type === 'Image'"
          :src="service.icon.source"
          class="max-h-16 max-w-[64px]"
        />
        <i
          v-if="service.icon.type === 'FontAwesomeIcon'"
          class="fa-solid text-blue-600 text-[32px]"
          :class="`fa-${service.icon.name}`"
        ></i>
      </div>
    </div>
    <h3 class="p-2 text-sm font-medium text-center bg-white text-gray-700">
      {{ service.name }}
    </h3>
    <template v-for="trigger in service.triggers">
      <LinkButton
        v-if="trigger.type === 'LinkTrigger'"
        :key="trigger.type"
        :href="trigger.uri"
        type="primary"
        class="rounded-none rounded-b-lg"
        >use</LinkButton
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Service } from "@actionshq/actions"
import LinkButton from "./LinkButton.vue"

defineProps<{
  service: Service
}>()
</script>

<style></style>
