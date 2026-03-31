<template>
  <div class="max-w-[860px] mx-auto px-10">

    <Navigation />

    <section class="pt-20">
      <h1 class="font-serif font-normal text-6xl mb-4">Writing</h1>
      <p class="text-sm leading-loose text-[#666]">Notes on software, web apps, and things I figure out while building. Updating week-daily</p>
    </section>

    <section class="py-14">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="grid gap-6 py-5 border-b border-[#ddd9d1] first:border-t last:border-b-0 no-underline group"
      >
        <span class="text-xs text-[#aaa] pt-0.5">{{ post.date ?? 'Soon' }}</span>
        <div>
          <div class="font-serif text-xl font-normal group-hover:text-[#888] transition-colors">{{ post.title }}</div>
          <div v-if="post.description" class="text-sm text-[#999] mt-1 leading-relaxed">{{ post.description }}</div>
        </div>
      </NuxtLink>
    </section>

    <footer class="py-10 border-t border-[#ddd9d1]">
      <NuxtLink to="/" class="text-sm uppercase tracking-widest text-[#aaa] hover:text-[#1a1a1a] transition-colors no-underline">← Back home</NuxtLink>
    </footer>
    <Footer></Footer>

  </div>
</template>

<script setup>
import Footer from '../../components/footer.vue';
import Navigation from '../../components/navigation.vue';

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>