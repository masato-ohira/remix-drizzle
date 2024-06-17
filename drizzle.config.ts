import type { Config } from 'drizzle-kit'

export default {
  dialect: 'sqlite',
  schema: './app/db/schema.ts',
  out: './app/drizzle/migrations',
  breakpoints: false,
} satisfies Config
