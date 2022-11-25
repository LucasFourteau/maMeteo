import { OWM } from '../../api/Openweathermap/types'

export type OpenweathermapState = {
  weather: OWM | null
}

export enum ActionTypes {
  STORE_WEATHER = 'STORE_WEATHER',
  LOAD_CITY_WEATHER = 'LOAD_CITY_WEATHER',
  LOAD_POSITION_WEATHER = 'LOAD_POSITION_WEATHER',
  RESET_WEATHER = 'RESET_WEATHER',
}

export type ReducersTypes = ActionTypes
