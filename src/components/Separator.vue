<template>
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-6 bg-gray-200 border-0" />
    <span
      class="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2 select-none"
    >
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts"></script>
