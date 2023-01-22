<template>
  <form class="mt-1 flex rounded-md shadow-sm" @submit.prevent="onSubmit">
    <div class="relative flex flex-grow items-stretch focus-within:z-10">
      <span
        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
      >
        make.new&nbsp;/
      </span>
      <input
        type="text"
        autocomplete="off"
        autofocus
        v-model="inputValue"
        class="block w-full border-gray-300 focus:border-blue-600 focus:ring-0 sm:text-sm"
      />
    </div>
    <button
      type="submit"
      class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    >
      add
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits<{
  (e: "addNewAction", value: string): void
}>()

const inputValue = ref("")

function onSubmit() {
  emit("addNewAction", inputValue.value)
}
</script>
