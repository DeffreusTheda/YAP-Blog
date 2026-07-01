import { db } from '~~/server/utils/db';
import { posts } from '~/db/schema';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' });
  }
  
  const post = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post.length) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' });
  }

  return post[0];
});