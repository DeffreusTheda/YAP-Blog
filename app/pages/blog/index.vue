<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">All Posts</h1>

    <div class="space-y-6">
      <article v-for="post in allPosts" :key="post.id" class="pb-6 border-b border-slate-200">
        <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-sm text-slate-600 mb-3">{{ formatDate(post.publishedAt) }}</p>
        <p class="text-slate-700 mb-4">{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline font-medium">
          Read more →
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' });

const allPosts = ref([]);

onMounted(async () => {
  allPosts.value = await $fetch('/api/posts');
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style></style>