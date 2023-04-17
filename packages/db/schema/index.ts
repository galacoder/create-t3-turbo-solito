import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Post Model
export const posts = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title"),
  content: text("content"),
});
// Schema for inserting a post
const insertPostSchema = createInsertSchema(posts);
// Schema for selecting a post
const selectPostSchema = createSelectSchema(posts);

// User Model
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  emailVerified: timestamp("email_verified"),
  image: text("image"),
});

// Account Model
export const accounts = mysqlTable(
  "accounts",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 255 }),
    type: text("type"),
    provider: varchar("provider", { length: 50 }), // Changed to VARCHAR with length 50
    providerAccountId: varchar("provider_account_id", { length: 100 }), // Changed to VARCHAR with length 100
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: timestamp("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (accounts) => ({
    userIdIndex: uniqueIndex("user_id_idx").on(accounts.userId),
    providerIndex: uniqueIndex("provider_idx").on(accounts.provider),
    providerAccountIdIndex: uniqueIndex("provider_account_id_idx").on(
      accounts.providerAccountId,
    ),
  }),
);

// Session Model
export const sessions = mysqlTable(
  "sessions",
  {
    id: serial("id").primaryKey(),
    sessionToken: varchar("session_token", { length: 255 }),
    userId: varchar("user_id", { length: 255 }),
    expires: timestamp("expires"),
  },
  (sessions) => ({
    sessionTokenIndex: uniqueIndex("session_token_idx").on(
      sessions.sessionToken,
    ),
  }),
);

// VerificationToken Model
export const verificationTokens = mysqlTable("verificationTokens", {
  identifier: text("identifier"),
  token: text("token"),
  expires: timestamp("expires"),
});
