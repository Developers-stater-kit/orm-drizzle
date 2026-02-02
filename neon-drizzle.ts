import 'dotenv/config'; 
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from process.env!");
}

const dbURL = neon(process.env.DATABASE_URL);
export const db = drizzle(dbURL);