<template>
  <div class="max-w-2xl">
    <h1 class="text-3xl font-bold mb-8">Create Post</h1>
    
    <form @submit.prevent="createPost" class="space-y-6">
      <div>
        <label class="block text-sm font-medium mb-2">Title</label>
        <input
          v-model="form.title"
          type="text"
          class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your post title"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Excerpt</label>
        <input
          v-model="form.excerpt"
          type="text"
          class="w-full px-4 py-2 border border-slate-300 rounded-lg"
          placeholder="Short description"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Content (Markdown)</label>
        <textarea
          v-model="form.content"
          class="w-full px-4 py-2 border border-slate-300 rounded-lg font-mono h-64"
          placeholder="Write your markdown here..."
          required
        />
      </div>

      <div class="flex gap-4">
        <label class="flex items-center gap-2">
          <input v-model="form.published" type="checkbox" />
          <span>Published</span>
        </label>
        <label class="flex items-center gap-2">
          <input v-model="form.pinned" type="checkbox" />
          <span>Pinned</span>
        </label>
      </div>

      <button
        type="submit"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Create Post
      </button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' });

const form = reactive({
  title: '',
  // slug: '', /* handled by the API instead */
  excerpt: '',
  content: '',
  published: false,
  pinned: false,
});

const createPost = async () => {
  try {
    await $fetch('/api/posts', {
      method: 'POST',
      body: form,
    });
    alert('Post created!');
    navigateTo('/blog');
  } catch (error) {
    alert('Error: ' + error.message);
  }
};
</script>