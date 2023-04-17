// db.ts

import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";



import { accounts, posts, sessions, users, verificationTokens } from "./schema";


// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

const db = drizzle(connection);

const schema = {
  users,
  posts,
  accounts,
  sessions,
  verificationTokens,
}


export {
  db,
  schema
};
