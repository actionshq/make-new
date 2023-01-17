<template>
    <DefaultLayout v-if="action" :actions="[action]">
        <section class="flex gap-2">
            <LinkButton
                v-for="service in action.services"
                type="primary"
                target="_blank"
                :href="service.url">
                    {{ service.name }}
            </LinkButton>
        </section>
    </DefaultLayout>
</template>

<script setup lang="ts">
import type { Action } from '@/models/Action';
import { ref, watchEffect } from 'vue';
import { findActionByName } from '@/models/findActionByName';
import { useRouter } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LinkButton from '@/components/LinkButton.vue';

const props = defineProps<{
  actionName: string
}>()

let action = ref<Action | undefined>(undefined)

const router = useRouter()
watchEffect(async () => {
    try {
        action.value = await findActionByName(props.actionName)
    } catch (error) {
        router.push("404")
    }
})
</script>
