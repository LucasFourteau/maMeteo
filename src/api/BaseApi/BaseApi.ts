import { env } from '../../environment';

export class BaseApi {
  public static owmCall(urlParams) {
    const { owmKey, owmUrl } = env;
    return fetch(`${owmUrl}${urlParams}&appid=${owmKey}`).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }  
      return response.json();
    })
  }
}
