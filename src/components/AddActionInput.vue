<template>
  <form class="mt-1 flex rounded-md shadow-sm" @submit.prevent="onSubmit">
    <div
      class="relative flex flex-grow items-stretch rounded-l-md border focus-within:border-blue-600"
    >
      <span
        class="inline-flex items-center border-r select-none bg-gray-50 rounded-l-md px-3 text-gray-500 sm:text-sm"
      >
        make.new&nbsp;/
      </span>
      <input
        type="text"
        autocomplete="off"
        autofocus
        v-model="inputValue"
        class="block w-full border-none focus:ring-0 sm:text-sm"
      />
    </div>
    <button
      type="submit"
      class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium select-none text-white hover:bg-blue-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
