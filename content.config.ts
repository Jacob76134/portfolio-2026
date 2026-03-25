import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'data',
      source: 'home.md',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        bio: z.string(),
        stack: z.array(z.string()),
        awards: z.array(z.object({
          title: z.string(),
          year: z.string()
        }))
      })
    }),
    work: defineCollection({
      type: 'page',
      source: 'work/**',
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        order: z.number(),
        description: z.string(),
        published: z.boolean(),
        date: z.string()
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        order: z.number(),
        date: z.string(),
        description: z.string(),
        published: z.boolean()
    })
    })
  }
})