<template>
  <div class="max-w-[860px] mx-auto px-10">

    <Navigation />

    <article v-if="work">
      <header class="pt-20 pb-12 border-b border-[#ddd9d1]">
        <p class="text-xs uppercase tracking-widest text-[#aaa] mb-6">{{ work.date }}</p>
        <h1 class="font-serif font-normal text-5xl leading-snug tracking-tight mb-6">{{ work.title }}</h1>
        <p v-if="work.description" class="text-base leading-loose text-[#666] max-w-[52ch]">{{ work.description }}</p>
      </header>

      <div class="prose py-14">
        <ContentRenderer :value="work" />
      </div>
    </article>

    <footer class="py-10 border-t border-[#ddd9d1]">
      <NuxtLink to="/blog" class="text-sm uppercase tracking-widest text-[#aaa] hover:text-[#1a1a1a] transition-colors no-underline">← All posts</NuxtLink>
    </footer>
    
    <Footer></Footer>

  </div>
</template>

<script setup>
import Footer from '../../components/footer.vue';
import Navigation from '../../components/navigation.vue';

const route = useRoute()

const { data: work } = await useAsyncData(`work-${route.path}`, () =>
  queryCollection('work').path(route.path).first()
)

if (!work.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({
  title: `${work.value.title} — Jacob Brewer`,
  meta: [{ name: 'description', content: work.value.description }]
})
</script>

<style>
.prose {
  color: #1a1a1a;
  font-family: 'DM Mono', monospace;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.9;
}

.prose h2 {
  font-family: 'EB Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 2.5rem 0 1rem;
}

.prose h3 {
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0 0.75rem;
}

.prose p { margin-bottom: 1.25rem; color: #444; }

.prose a {
  color: #1a1a1a;
  border-bottom: 1px solid #ddd9d1;
  text-decoration: none;
  transition: border-color 0.2s;
}

.prose a:hover { border-color: #999; }

.prose code {
  background: #ede9e1;
  padding: 0.15rem 0.4rem;
  font-size: 0.875rem;
}

.prose pre {
  background: #1a1a1a;
  color: #f5f2ec;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.prose pre code { background: none; padding: 0; color: inherit; }

.prose blockquote {
  border-left: 2px solid #ddd9d1;
  padding-left: 1.25rem;
  color: #888;
  margin: 1.5rem 0;
}

.prose ul, .prose ol {
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  color: #444;
}

.prose li { margin-bottom: 0.4rem; }

.prose hr {
  border: none;
  border-top: 1px solid #ddd9d1;
  margin: 2.5rem 0;
}
</style>