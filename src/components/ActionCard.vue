<template>
  <a :href="action.spec.slug">
    <div class="flex flex-col h-full rounded-lg border border-gray-200 bg-white">
      <div class="flex justify-center p-4 rounded-t-lg bg-gray-50">
        <i :class="action.spec.iconClass" class="text-blue-600 text-8xl"></i>
      </div>
      <div class="flex flex-1 flex-col p-4 text-sm">
        <h3 class=" font-medium text-gray-700 mb-2">
          {{ action.metadata.name }}
        </h3>
        <p class=" text-gray-500">Make a new {{ action.metadata.name.toLowerCase() }}<span v-if="serviceNames.length > 0">
            with {{ serviceNames.join(", ") }} and others</span>.
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Action } from '@/models/Action';

const props = defineProps<{
  action: Action
}>() 

const serviceNames = computed(() => props.action.spec.services.map(service => service.name))
</script>

<style>
</style>
