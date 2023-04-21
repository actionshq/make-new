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
import { useHead } from "@unhead/vue"

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

const origin = "http://localhost:3001"

const manifest = {
  name: `New ${action.value?.metadata.name}`,
  short_name: `New ${action.value?.metadata.name}`,
  start_url: `${origin}/${action.value?.spec.slug}`,
  display: "standalone",
  background_color: "#2563eb",
  lang: "en",
  scope: `${origin}/${action.value?.spec.slug}`,
  theme_color: "#2563eb",
  icons: [
    {
      src: `${origin}/android-chrome-192x192.png`,
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: `${origin}/android-chrome-512x512.png`,
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: `${origin}/android-chrome-512x512.png`,
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
}

useHead({
  titleTemplate: () => `New ${action.value?.metadata.name}`,
  link: [
    {
      rel: "manifest",
      href: `data:application/manifest+json,${encodeURIComponent(
        JSON.stringify(manifest)
      )}`,
    },
  ],
})
</script>
