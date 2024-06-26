import type { AppLoadContext } from '@remix-run/cloudflare'
import { drizzle } from 'drizzle-orm/d1'

export const drizzleClient = (ctx: AppLoadContext) =>
  drizzle(ctx.cloudflare.env.DB)
