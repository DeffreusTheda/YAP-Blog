<script setup>
useHead({
    meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    }],
    link: [{
        rel: 'icon',
        href: '/favicon.ico'
    }],
    htmlAttrs: {
        lang: 'en'
    }
})

const title = "Effie's Personal Blog"
const description = 'CTFs, Write-ups, Blog, and other daily delusion.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: '',
    twitterCard: 'summary_large_image'
})
</script>

<template>
<UApp>
    <UMain>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UMain>
</UApp>
</template>
