<template>
  <header class="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
    <nav class="flex justify-between">
      <Logo :actions="actions" />
      <div class="flex gap-x-5">
        <LinkButton type="flat" href="/#" class="hidden sm:inline">
          <span>How to use</span>
        </LinkButton>
        <LinkButton type="primary" href="/#">Discover</LinkButton>
      </div>
    </nav>
  </header>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
  <footer
    class="max-w-7xl py-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
  >
    <nav class="flex justify-center space-x-6">
      <LinkButton type="plain" href="/#">About</LinkButton>
      <LinkButton type="plain" href="/#">Blog</LinkButton>
      <LinkButton type="plain" href="/#">Imprint</LinkButton>
      <LinkButton type="plain" href="/#">Contact</LinkButton>
      <LinkButton type="plain" href="/#">Terms</LinkButton>
    </nav>
    <div class="flex justify-center mt-8 space-x-6">
      <LinkButton type="plain" href="/#">
        <span class="sr-only">Facebook</span>
        <i class="fa-brands fa-facebook text-xl"></i>
      </LinkButton>

      <LinkButton type="plain" href="/#">
        <span class="sr-only">Twitter</span>
        <i class="fa-brands fa-twitter text-xl"></i>
      </LinkButton>

      <LinkButton type="plain" href="https://github.com/actionshq/make-new">
        <span class="sr-only">GitHub</span>
        <i class="fa-brands fa-github text-xl"></i>
      </LinkButton>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LinkButton from "@/components/LinkButton.vue"
import Logo from "@/components/Logo.vue"
import type { Action } from "@actionshq/actions"

defineProps<{
  actions?: Action[]
}>()
</script>
