import { PostgresStore } from "@mastra/pg";

export const postgresStore = new PostgresStore({
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  user: process.env.POSTGRES_USER || "tomuki",
  password: process.env.POSTGRES_PASSWORD || "tomuki",
  database: process.env.POSTGRES_DB || "tomuki",
});
