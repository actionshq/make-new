<template>
    <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav class="flex justify-between">
                <Logo :actions="actions" />
                <div class="flex items-center gap-x-5 md:gap-x-8">
                    <a class="hidden md:inline rounded-full py-2 px-4 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        href="/#">How to use</a>
                    <a class="rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500  focus-visible:outline-blue-600"
                        href="/#">Discover</a>
                </div>
            </nav>
        </div>
    </header>
    <main class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
        <div class="flex flex-wrap-reverse justify-center">
            <div class="flex items-center w-full md:w-1/2">
                <div class="max-w-2xl mb-8">
                    <h1
                        class="text-4xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
                        Make new x</h1>
                    <p class="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Make.new is a free service to create provider independent resources. Start discovering how to <a
                            href="/things" class="underline">make.new/things</a> or add a new thing:
                    </p>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <div class="relative flex flex-grow items-stretch focus-within:z-10">
                            <span
                                class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">make.new&nbsp;/</span>
                            <input type="text" name="username" id="username" autocomplete="off" autofocus
                                class="block w-full border-gray-300 focus:border-blue-600 focus:ring-0 sm:text-sm" />
                        </div>
                        <button type="button"
                            class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                            <span>add</span>
                        </button>
                    </div>
                </div>
            </div>
            <Illustration class="flex items-center w-full md:w-1/2 max-h-96" />
        </div>
        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
            <span
                class="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 select-none">or</span>
        </div>
        <section class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            <ActionCard v-for="action in actions" :action="action" />
        </section>
    </main>
</template>

<script setup lang="ts">
import ActionCard from '@/components/ActionCard.vue';
import Illustration from '@/components/Illustration.vue';
import Logo from '@/components/Logo.vue';
import actions from "@/data/actions.json"
</script>
