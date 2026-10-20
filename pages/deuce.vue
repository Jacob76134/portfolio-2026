<template>
  <!-- The game is a static page (public/extra-deuce-wild), built from the
       Extra Deuce Wild repo with web/publish.sh. It runs in an iframe so its
       styles and scripts stay separate from the site's. -->
  <iframe
    src="/extra-deuce-wild/index.html"
    title="Extra Deuce Wild"
    class="fixed inset-0 w-full h-full border-0 bg-[#0e1114]"
  />
</template>

<script setup>
useHead({
  title: 'Extra Deuce Wild | Jacob Brewer',
  meta: [{ name: 'description', content: 'Extra Deuce Wild: tennis, played with cards. A playtest build that runs in your browser.' }],
  bodyAttrs: { style: 'background: #0e1114' },
})
</script>
