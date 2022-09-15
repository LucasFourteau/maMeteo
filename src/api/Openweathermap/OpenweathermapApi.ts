import { BaseApi } from '../BaseApi';
import { OWM } from './types';

export class OpenweathermapApi {
  public static loadCity = (city: string) =>
    BaseApi.owmCall()
      .url(`?q=${city}&units=metric`)
      .get()
      .json(json => json) as Promise<OWM>

  public static loadPosition = ({ lat, lon }: { lat: number; lon: number }) =>
    BaseApi.owmCall()
      .url(`?lat=${lat}&lon=${lon}&units=metric`)
      .get()
      .json(json => json) as Promise<OWM>
}
