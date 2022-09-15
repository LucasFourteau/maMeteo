import wretch from 'wretch'
import { env } from '../../environment'
import { authMiddleware } from '../authMiddleware'

export class BaseApi {
  public static owmCall() {
    return wretch(env.owmUrl).middlewares([authMiddleware()])
  }
}
