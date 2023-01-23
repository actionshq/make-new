<template>
  <a
    aria-label="home"
    :href="currentAction?.spec.slug"
    tabindex="-1"
    class="text-2xl text-slate-700 select-none focus:outline-none group"
  >
    <span class="font-bold leading-none">make.new</span>
    <template v-if="currentAction">
      <span> / </span>
      <Transition>
        <span :key="currentAction.spec.icon.name">
          <span class="hidden group-hover:inline">{{
            currentAction.spec.slug
          }}</span>
          <i
            class="fa-solid text-blue-600 text-xl group-hover:hidden"
            :class="`fa-${currentAction.spec.icon.name}`"
          ></i>
        </span>
      </Transition>
    </template>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useInterval } from "@vueuse/core"
import { loopGenerator } from "@/utils/loopGenerator"
import type { Action } from "@actionshq/actions"

const props = defineProps<{
  actions?: Action[]
}>()

const actionGenerator = computed(() =>
  props.actions ? loopGenerator(props.actions) : undefined
)

const transitionInterval = useInterval(4000)
const currentAction = computed(
  () => actionGenerator.value?.next(transitionInterval.value).value
)
</script>

<style>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
