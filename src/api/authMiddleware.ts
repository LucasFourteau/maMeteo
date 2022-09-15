import { FetchLike, Middleware, WretcherResponse } from 'wretch'
import { env } from '../environment'

export const authMiddleware: Middleware = () => {
  return (next: FetchLike) =>
    async (url: string): Promise<WretcherResponse> => {
      const { owmKey } = env
      const response = await next(`${url}&appid=${owmKey}`, {})
      return response
    }
}
