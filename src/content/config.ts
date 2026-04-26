import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),
    title: z.string(),
    epigraph: z.string().optional(),
  }),
});

export const collections = { chapters };
