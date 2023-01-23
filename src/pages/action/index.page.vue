<template>
  <DefaultLayout v-if="action" :actions="[action]">
    <section
      class="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-6 auto-rows-fr"
    >
      <ServiceCard
        v-for="service in action.spec.services"
        :key="service.name"
        :service="service"
      />
      <AddServiceCard :action="action" />
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import type { Action } from "@actionshq/actions"
import { ref, watch } from "vue"
import { findActionByName } from "@/models/findActionByName"
import { useRouter } from "vue-router"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import ServiceCard from "@/components/ServiceCard.vue"
import AddServiceCard from "@/components/AddServiceCard.vue"

const props = defineProps<{
  actionName: string
}>()

let action = ref<Action | undefined>()

const router = useRouter()

try {
  action.value = await findActionByName(props.actionName)
} catch (error) {
  router.push("404")
}

watch(
  () => props.actionName,
  async (actionName) => {
    try {
      action.value = await findActionByName(actionName)
    } catch (error) {
      router.push("404")
    }
  }
)
</script>
