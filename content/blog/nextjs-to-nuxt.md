---
title: "Why I moved from Next.js to Nuxt"
description: "Same mental model, better fit for what I was building."
date: March 2026
draft: false
---

When I decided to add a personal blog to my site I had to think about how I wanted to store that content. Building my previous portfolio, I went with Next simply because that's what I was using in my work at the time. Ah 2023, simpler times. Quite frankly Next was overkill. When I opened up a repo I hadn't touched in nearly 2 years and saw dependency versions just as old it kind of made my eyes bleed. `npm next upgrade` → 3 critical errors and a handful of warnings → `npm audit fix --force` Okay yeah time to start fresh. 

I feel like I'm in so deep with back-end development that if I need to do more for a front-end than CDN Vue.JS I'm kind of grumpy about it. With blog data in mind 'v-for' and 'v-if' were calling to me like the Green Goblin mask. I knew I wanted to use Vue. Obviously aware of Nuxt as well, I decided to look into its content management solutions. [Nuxt Content](https://content.nuxt.com/) showed up right away. That pretty much sold me. There are alternatives of course that Next.js offers, but nothing that was so obviously plug and play. Such is life with Next, you can do anything, but at what cost? 

The draw of markdown file content management is just so slick and simple. Since I'm going to update this blog often, I needed a way to write anywhere and publish from anywhere. Currently I'm writing this on a Chromebook while my kid is in gymnastics and it took me all of 10 minutes to set up the other day. I can see it getting a bit bloated and disorganized, but for now it's working great.
