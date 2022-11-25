import { BaseApi } from '../BaseApi';
import { OWM } from './types';

export class OpenweathermapApi {
  public static loadCity = (city: string) =>
    BaseApi.owmCall(`?q=${city}&units=metric`)
      .then(json => json) as Promise<OWM>

  public static loadPosition = ({ lat, lon }: { lat: number; lon: number }) =>
    BaseApi.owmCall(`?lat=${lat}&lon=${lon}&units=metric`)
      .then(json => json) as Promise<OWM>
}
