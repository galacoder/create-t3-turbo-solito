import { z } from "zod";

import { db, schema } from "@aeon/db";

import "@aeon/db/";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq, desc } from "drizzle-orm/expressions";

const { posts } = schema

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    // return await db.select(posts).orderBy(posts.id.desc());
    return await db.select().from(posts).orderBy(desc(posts.id));
  }),
  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const result = await db.select().from(posts).where(eq(posts.id, input.id)).limit(1);

      return result[0];
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      return await db
        .insert(posts)
        .values({
          title: input.title,
          content: input.content,
        })
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    return await db
      .delete(posts)
      .where(eq(posts.id, input))
  }),
});
