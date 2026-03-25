<template>
  <div class="max-w-[860px] mx-auto px-10">

    <Navigation />

    <section class="pt-20">
      <h1 class="font-serif font-normal text-6xl mb-4">Work</h1>
      <p class="text-sm leading-loose text-[#666]">A collection of past projects I've contributed to.</p>
    </section>

    <section class="py-14">
      <NuxtLink
        v-for="w in work"
        :key="w.path"
        :to="w.path"
        class="grid gap-6 py-5 border-b border-[#ddd9d1] first:border-t last:border-b-0 no-underline group"

      >

        <span class="text-xs text-[#aaa] pt-0.5">{{ w.date ?? 'Soon' }}</span>
        
        <div class="flex flex-col">
          <div class="font-serif text-xl font-normal group-hover:text-[#888] transition-colors">{{ w.title }}</div>
          <div v-if="w.description" class="text-sm text-[#999] mt-1 leading-relaxed">{{ w.description }}</div>
          <div class="flex justify-end mt-2">
          <span 
            v-for="tag in w.tags" 
            :key="tag"
            :to="tag"
          class="text-xs text-[#aaa] pt-0.5 border-[#aaa] border-solid border-[1px] p-1 m-1 rounded-md">{{ tag }}</span>
          </div>
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

const { data: work } = await useAsyncData('work', () =>
  queryCollection('work').order('order', 'ASC').all()
)
</script>