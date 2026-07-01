<template>
<div class="flex flex-col md:flex-row min-h-screen">
  <!-- FOR DESKTOP -->
  <aside class="hidden md:flex md:w-64 md:sticky md:top-0 md:h-screen md:flex-col bg-slate-50 border-r border-slate-200 p-6 overflow-y-auto">

    <div class="mb-2">
      <ULink to="/">
        <UAvatar src="https://deffreus.vercel.app/img/avatar_hu16244868254474637789.png" alt="avatar" size="lg" class="mb-4" />
      </ULink>
      <h1 class="text-xl font-bold">Effie's Personal Blog</h1>
      <p class="text-sm mt-2">Don't get stuck in a closet—wear yourself out.</p>
    </div>

    <!-- Social Links -->
    <div class="mt-2">
      <div class="flex gap-3">
        <UButton to="https://github.com/DeffreusTheda" target="_blank" variant="ghost" color="neutral" size="sm" icon="i-pixel-github" />
      </div>
    </div>

    <USeparator class="my-6" />

    <nav class="pt-4 border-t border-slate-200 space-y-1">
      <UButton to="/" variant="ghost" color="neutral" class="w-full justify-start">
        <UIcon name="i-heroicons-home-20-solid" class="mr-2" />
        Home
      </UButton>
      <UButton to="/about" variant="ghost" color="neutral" class="w-full justify-start">
        <UIcon name="i-heroicons-user-20-solid" class="mr-2" />
        About
      </UButton>
      <UButton to="/blog" variant="ghost" color="neutral" class="w-full justify-start">
        <UIcon name="i-heroicons-document-text-20-solid" class="mr-2" />
        Blog
      </UButton>
    </nav>

    <footer class="border-t border-slate-200 mt-auto p-6 text-center text-sm text-slate-600">
      <p>© 2026 Effie.</p>
    </footer>
  </aside>

  <!-- FOR MOBILE -->
  <main class="flex-1 flex flex-col">
    <header class="md:hidden sticky top-0 bg-white border-b border-slate-200 p-4 z-40">
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-2">
          <UAvatar src="https://deffreus.vercel.app/img/avatar_hu16244868254474637789.png" alt="avatar" size="md" />
          <h1 class="font-bold text-lg text-slate-900">Effie's Personal Blog</h1>
        </div>
        <UDropdownMenu :items="items">
          <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
        </UDropdownMenu>
      </div>
    </header>

    <div class="flex-1 p-4 md:p-8">
      <slot />
    </div>

    <footer class="md:hidden border-t border-slate-200 mt-auto p-6 text-center text-sm text-slate-600">
      <p>© 2026 Effie.</p>
    </footer>
  </main>
</div>
</template>

<style scoped>
/* for smooth scroll on sidebar */
aside {
  overflow-y: auto;
}
</style>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'i-heroicons-home-20-solid',
      to: '/',
    },
    {
      label: 'About',
      icon: 'i-heroicons-user-20-solid',
      to: '/about'
    },
    {
      label: 'Blog',
      icon: 'i-heroicons-document-text-20-solid',
      to: '/blog'
    }
  ]
]);
</script>
