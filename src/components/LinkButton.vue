<template>
  <a
    class="rounded-full py-2 px-4 text-sm text-center"
    :class="classes"
    :href="href"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  href: string
  type: "plain" | "primary"
}>()

const typeClasses: Record<(typeof props)["type"], string> = {
  plain: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  primary:
    "text-white font-semibold bg-blue-600 hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
}

const classes = computed(() => typeClasses[props.type])
</script>
