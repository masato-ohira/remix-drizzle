import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'
import * as build from '../build/server'

type Env = {
  BASIC_USER: string
  BASIC_PASS: string
}

const parseAuthHeader = (header: string | null) => {
  if (!header) return null
  if (!header.startsWith('Basic ')) return null

  const base64Credentials = header.substring(6)
  const credentials = atob(base64Credentials).split(':')
  if (credentials.length !== 2) return null

  return {
    user: credentials[0],
    pass: credentials[1],
  }
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx
  const authHeader = request.headers.get('Authorization')
  const credentials = parseAuthHeader(authHeader)

  if (
    !credentials ||
    credentials.user !== env.BASIC_USER ||
    credentials.pass !== env.BASIC_PASS
  ) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  const handler = createPagesFunctionHandler({ build })
  return handler(ctx)
}
