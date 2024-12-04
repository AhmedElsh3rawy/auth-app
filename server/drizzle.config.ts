import { defineConfig } from "drizzle-kit";
import { dotenv } from "./src/utils/dotenv";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url: dotenv.DB_URL,
  },
  verbose: true,
  strict: true,
});
