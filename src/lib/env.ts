import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.url(),
  VITE_APP_NAME: z.string().min(1),
  VITE_ENABLE_DEVTOOLS: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
    .join("\n");

  throw new Error(`Invalid environment variables:\n${issues}`);
}

export const env = parsed.data;
