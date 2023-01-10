<template>
    <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav class="flex justify-between">
                <Logo :actions="actions" />
                <div class="flex items-center gap-x-5 md:gap-x-8">
                    <a class="rounded-full py-2 px-4 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        href="/#">Directory</a>
                    <a class="rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500  focus-visible:outline-blue-600"
                        href="/#">How to use</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import actions from "@/data/actions.json"
</script>
