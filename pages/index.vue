<template>
  <div class="max-w-[860px] mx-auto px-10">

    <Navigation />

    <!-- Hero -->
    <section class="pt-28 pb-20 border-b border-[#ddd9d1] fade-up" style="animation-delay:0.15s">
      <h1 class="font-serif font-normal text-6xl leading-tight tracking-tight mb-7">
        {{ hero?.title }}<br>
        <em class="text-[#888]">{{ hero?.subtitle }}</em>
      </h1>
      <p class="text-sm leading-loose text-[#666] max-w-[52ch]">{{ hero?.bio }}</p>
      <div class="flex gap-8 mt-10">
        <a
          href="mailto:jacobbrewerrooney@gmail.com"
          class="text-sm uppercase tracking-widest text-[#1a1a1a] no-underline border-b border-[#1a1a1a] pb-px hover:text-[#888] hover:border-[#888] transition-colors"
        >Get in touch</a>
        <NuxtLink
          to="/#work"
          class="text-sm uppercase tracking-widest text-[#1a1a1a] no-underline border-b border-[#1a1a1a] pb-px hover:text-[#888] hover:border-[#888] transition-colors"
        >See my work</NuxtLink>
      </div>
    </section>

    <!-- Stack -->
    <section class="py-14 border-b border-[#ddd9d1] fade-up" style="animation-delay:0.25s">
      <p class="text-xs uppercase tracking-widest text-[#aaa] mb-8">Stack</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in hero?.stack"
          :key="tag"
          class="text-sm tracking-wide text-[#555] border border-[#ddd9d1] px-3 py-1.5 hover:border-[#999] hover:text-[#1a1a1a] transition-colors cursor-default"
        >{{ tag }}</span>
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="py-14 border-b border-[#ddd9d1] fade-up" style="animation-delay:0.35s">
      <p class="text-xs uppercase tracking-widest text-[#aaa] mb-8">Work</p>
      <NuxtLink
        v-for="project in work"
        :key="project.path"
        :to="project.path"
        class="flex justify-between items-baseline gap-4 py-4 border-b border-[#ddd9d1] first:border-t last:border-b-0 no-underline group"
      >
        <span class="font-serif text-xl font-normal group-hover:text-[#888] transition-colors">{{ project.title }}</span>
        <span class="text-xs uppercase tracking-widest text-[#aaa] whitespace-nowrap">{{ project.tags?.join(' / ') }}</span>
      </NuxtLink>
    </section>

    <!-- Recognition -->
    <section class="py-14 border-b border-[#ddd9d1] fade-up" style="animation-delay:0.45s">
      <p class="text-xs uppercase tracking-widest text-[#aaa] mb-8">Recognition</p>
      <div
        v-for="award in hero?.awards"
        :key="award.title"
        class="flex justify-between items-baseline gap-4 py-4 border-b border-[#ddd9d1] first:border-t last:border-b-0"
      >
        <span class="font-serif text-lg font-normal">{{ award.title }}</span>
        <span class="text-xs tracking-widest text-[#aaa] whitespace-nowrap">{{ award.year }}</span>
      </div>
    </section>

    <!-- Blog -->
    <section class="py-14 border-b border-[#ddd9d1] fade-up" style="animation-delay:0.55s">
      <p class="text-xs uppercase tracking-widest text-[#aaa] mb-8">Writing</p>
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="grid gap-6 py-4 border-b border-[#ddd9d1] first:border-t last:border-b-0 no-underline group"
        style="grid-template-columns: 7rem 1fr"
      >
        <span class="text-xs text-[#aaa]">{{ post.date ?? 'Soon' }}</span>
        <span class="font-serif text-xl font-normal group-hover:text-[#888] transition-colors">{{ post.title }}</span>
      </NuxtLink>
    </section>

    <!-- Footer -->
    <Footer></Footer>

  </div>
</template>

<script setup>
import Footer from '../components/footer.vue';
import Navigation from '../components/navigation.vue';

const { data: hero } = await useAsyncData('home', () =>
  queryCollection('home').first()
)

const { data: work } = await useAsyncData('work', () =>
  queryCollection('work').order('order', 'ASC').all()
)

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>