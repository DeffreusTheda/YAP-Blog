import { db } from '~~/server/utils/db';
import { posts } from '~/db/schema';
import { eq, desc } from 'drizzle-orm';

export default defineEventHandler(async () => {
  return await db
    .select()
    .from(posts)
    .where(eq(posts.published, true))
    .orderBy(desc(posts.publishedAt));
});
