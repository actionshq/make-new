<template>
    <DefaultLayout :actions="actions">
        <div class="flex flex-wrap-reverse justify-center">
            <div class="flex items-center w-full md:w-1/2">
                <div class="max-w-2xl mb-8">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
                        Make new x</h1>
                    <p class="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
                        Make.new is a free service to create provider independent resources. Start discovering how to <a
                            href="/things" class="underline">make.new/things</a> or add a new thing:
                    </p>
                    <InputSubmit modelValue="">
                        <template #prefix>make.new&nbsp;/</template>
                        <template #submit>add</template>
                    </InputSubmit>
                </div>
            </div>
            <Illustration class="flex items-center w-full md:w-1/2 max-h-96" />
        </div>
        <Separator>or</Separator>
        <section class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            <ActionCard v-for="action in actions" :action="action" />
        </section>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ActionCard from '@/components/ActionCard.vue';
import Illustration from '@/components/Illustration.vue';
import Separator from '@/components/Separator.vue';
import InputSubmit from '@/components/InputSubmit.vue';
import { ref, watchEffect } from 'vue';
import type { Action } from '@/models/Action';
import { findAllActions } from '@/models/findAllActions';

let actions = ref<Action[] | undefined>(undefined)

watchEffect(async () => {
    actions.value = await findAllActions()
})
</script>
