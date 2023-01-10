<template>
    <a aria-label="home" :href="currentAction.name" tabindex="-1" class="text-2xl text-slate-700 select-none focus:outline-none group">
        <span class="font-bold leading-none">make.new</span>
        <span> / </span>
        <Transition>
            <span :key="currentAction.iconClass">
                <span class="hidden group-hover:inline">{{ currentAction.name }}</span>
                <i :class="currentAction.iconClass" class="text-blue-600 text-xl group-hover:hidden"></i>
            </span>
        </Transition>
    </a>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useInterval } from '@vueuse/core'
import { loopGenerator } from '@/utils/loopGenerator';
import type { Action } from '@/models/Action';

const props = defineProps<{
    actions: Action[]
}>() 

const actionGenerator = loopGenerator(props.actions)

const transitionInterval = useInterval(4000)
const currentAction = computed(() => actionGenerator.next(transitionInterval.value).value)
</script>

<style>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>