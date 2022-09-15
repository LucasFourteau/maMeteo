import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import { ActionTypes } from './types'

export const OpenweathermapActions = {
  cityWeather: (city: string) => createAction(ActionTypes.LOAD_CITY_WEATHER, { city }),
  positionWeather: (lat: number, lon: number) => createAction(ActionTypes.LOAD_POSITION_WEATHER, { lat, lon }),
  resetWeather: () => createAction(ActionTypes.RESET_WEATHER),
  storeWeather: (weather: any) => createAction(ActionTypes.STORE_WEATHER, { weather }),
}

export type OpenweathermapActionObjectTypes = ActionsUnion<typeof OpenweathermapActions>
