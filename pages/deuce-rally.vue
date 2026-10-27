<template>
  <!-- Deuce Rally, the live prototype of Extra Deuce Wild: a static page
       (public/extra-deuce-wild/rally) built with web/publish.sh in that repo,
       in an iframe so its styles and scripts stay separate from the site's. -->
  <iframe
    src="/extra-deuce-wild/rally/index.html"
    title="Deuce Rally"
    class="fixed inset-0 w-full h-full border-0 bg-[#4f9e55]"
  />
</template>

<script setup>
useHead({
  title: 'Deuce Rally | Jacob Brewer',
  meta: [{ name: 'description', content: 'Deuce Rally: a live tennis prototype. Run, wind up, swing. Runs in your browser.' }],
  bodyAttrs: { style: 'background: #4f9e55' },
})
</script>
