<template>
  <!-- LOADING SKELETON -->
  <div v-if="!loaded" class="flex flex-col gap-4">
      <USkeleton class="h-4 w-62.5" />
      <USkeleton class="h-4 w-50 mb-8" />
      <USkeleton class="h-12 w-full" />
    </div>
  
  <article v-else-if="loaded && post">
    <h1 class="text-4xl font-bold mb-2">{{ post.title }}</h1>
    <p class="text-slate-600 mb-8">{{ formatDate(post.publishedAt) }}</p>

    <Comark>{{ post.content }}</Comark>
  </article>
</template>

<script setup>
import { Comark } from '@comark/vue';

definePageMeta({ layout: 'default' });

const route = useRoute();

const { data: post } = await useFetch(`/api/posts/${route.params.slug}`);
console.log('fetched: ', post.title);

const loaded = ref(false);

onMounted(async () => {
  loaded.value = true;
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>