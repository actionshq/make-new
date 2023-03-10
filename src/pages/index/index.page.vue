<template>
  <DefaultLayout :actions="actions">
    <div class="flex flex-wrap-reverse justify-center">
      <div class="flex items-center w-full md:w-1/2">
        <div class="max-w-2xl mb-8">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-800 lg:text-4xl"
          >
            Make new {action}
          </h1>
          <p class="py-5 text-xl leading-normal text-gray-500 lg:text-xl">
            Make.new is a free and open-source service to trigger provider
            independent actions. Discover how to
            <a href="/actions" class="underline">make.new/actions</a> or add a
            new action:
          </p>
          <AddActionInput @addNewAction="onAddNewAction" />
        </div>
      </div>
      <Illustration class="md:w-1/2 max-h-96" />
    </div>
    <Separator>or</Separator>
    <section
      class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 auto-rows-fr"
    >
      <ActionCard
        v-for="action in actions"
        :key="action.spec.slug"
        :action="action"
      />
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import ActionCard from "@/components/ActionCard.vue"
import Illustration from "@/components/Illustration.vue"
import Separator from "@/components/Separator.vue"
import AddActionInput from "@/components/AddActionInput.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import type { Action } from "@actionshq/actions"
import { findAllActions } from "@/models/findAllActions"
import { createActionTemplate } from "@/models/createActionTemplate"

const router = useRouter()

let actions = ref<Action[] | undefined>(await findAllActions())

async function onAddNewAction(actionSlug: string) {
  if (actions.value?.find((action) => action.spec.slug === actionSlug)) {
    router.push(`/${actionSlug}`)
  } else if (actionSlug.trim() != "") {
    const template = encodeURIComponent(await createActionTemplate(actionSlug))
    window.location.href = `https://github.com/actionshq/actions/new/main?filename=actions/${actionSlug}.yaml&value=${template}`
  }
}
</script>
