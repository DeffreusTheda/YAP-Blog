import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./app/db/schema.ts",
    dbCredentials: {
        url: "postgresql://postgres:password@localhost:5432/blog"
    },
});
