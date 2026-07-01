import { db } from '~~/server/utils/db';
import { posts } from '~/db/schema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const slug = body.title
      .toLowerCase()
      .trim()
      .normalize('NFD') // Splits accented characters into base letters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // Removes the accents
      .replace(/[^a-z0-9\s-]/g, '') // Removes special characters except alphanumeric, spaces, and hyphens
      .replace(/[\s_]+/g, '-') // Replaces spaces and underscores with a single hyphen
      .replace(/-+/g, '-') // Replaces multiple consecutive hyphens with a single hyphen
      .replace(/^-+|-+$/g, ''); // Trims trailing or leading hyphens

  const newPost = await db
    .insert(posts)
    .values({
      title: body.title,
      slug: slug,
      content: body.content,
      excerpt: body.excerpt,
      published: body.published || false,
      pinned: body.pinned || false,
      publishedAt: body.published ? new Date() : null,
    })
    .returning();

  return newPost[0];
});