<template>
  <a :class="classes" :href="href" :target="target">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    href: string
    type?: "plain" | "primary" | "flat"
    target?: "_self" | "_blank" | string
  }>(),
  {
    type: "plain",
    target: "_self",
  }
)

const typeClasses: Record<(typeof props)["type"], string> = {
  plain: "text-sm text-center text-gray-500 hover:text-gray-900",
  flat: "rounded-full py-2 px-4 text-sm text-center text-gray-500 hover:text-gray-900 hover:bg-slate-100",
  primary:
    "rounded-full py-2 px-4 text-sm text-center text-white font-semibold bg-blue-600 hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
}

const classes = computed(() => typeClasses[props.type])
</script>
