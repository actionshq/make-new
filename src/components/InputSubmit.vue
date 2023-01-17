<template>
  <div class="mt-1 flex rounded-md shadow-sm">
    <div class="relative flex flex-grow items-stretch focus-within:z-10">
      <span
        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
        <slot name="prefix" />
      </span>
      <input type="text" autocomplete="off" autofocus :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
        class="block w-full border-gray-300 focus:border-blue-600 focus:ring-0 sm:text-sm" />
    </div>
    <button type="button"
      class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
      <slot name="submit" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
