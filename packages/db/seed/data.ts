
import { posts, users, accounts, sessions, verificationTokens } from '../schema';
import { db } from '../index'
import { InferModel } from 'drizzle-orm';


type NewUser = InferModel<typeof users, 'insert'>
type NewPost = InferModel<typeof posts, 'insert'>

// Seed data for Users
const newUser1: NewUser = {
  name: 'Alice',
  email: 'alice@example.com',
  emailVerified: new Date(),
  image: 'https://alice.example.com/image.jpg',
};

const newUser2: NewUser = {
  name: 'Bob',
  email: 'bob@example.com',
  emailVerified: new Date(),
  image: 'https://bob.example.com/image.jpg',
};

const newUser3: NewUser = {
  name: 'Carol',
  email: 'carol@example.com',
  emailVerified: new Date(),
  image: 'https://carol.example.com/image.jpg',
};

// Seed data for Posts
const newPost1: NewPost = {
  title: 'Hello World',
  content: 'Welcome to our blog!',
};

const newPost2: NewPost = {
  title: 'A day in the life',
  content: 'Today, we will explore the daily life of a software engineer.',
};

const newPost3: NewPost = {
  title: 'The future of AI',
  content: 'In this post, we will discuss the exciting possibilities of artificial intelligence.',
};

async function seedData() {
  // Insert Users
  await db.insert(users).values(newUser1);
  await db.insert(users).values(newUser2);
  await db.insert(users).values(newUser3);

  // Insert Posts
  await db.insert(posts).values(newPost1);
  await db.insert(posts).values(newPost2);
  await db.insert(posts).values(newPost3);
}

seedData().then(() => {
  console.log('Seeds successfully created');
});

