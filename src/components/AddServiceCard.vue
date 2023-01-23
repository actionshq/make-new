<template>
  <a
    :href="`https://github.com/actionshq/actions/edit/main/actions/${action.spec.slug}.yaml`"
  >
    <div
      class="flex flex-col h-full justify-center items-center rounded-lg border border-gray-200 bg-gray-50"
    >
      <i class="fa-solid fa-circle-plus text-gray-200 text-4xl"></i>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Action } from "@actionshq/actions"

defineProps<{
  action: Action
}>()
</script>

<style></style>
