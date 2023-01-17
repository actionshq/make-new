<template>
    <header class="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between">
            <Logo :actions="actions" />
            <div class="flex gap-x-5">
                <LinkButton type="plain" href="/#">How to use</LinkButton>
                <LinkButton type="primary" href="/#">Discover</LinkButton>
            </div>
        </nav>
    </header>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <slot />
    </main>
</template>

<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue';
import Logo from '@/components/Logo.vue';
import type { Action } from '@/models/Action';

defineProps<{
    actions?: Action[]
}>()
</script>
