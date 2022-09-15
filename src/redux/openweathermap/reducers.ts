import { Reducer } from 'redux'
import { OpenweathermapActionObjectTypes } from './actions'
import { ActionTypes, OpenweathermapState } from './types'

export const initialState: OpenweathermapState = {
  weather: null,
}

export const OpenweathermapReducer: Reducer<OpenweathermapState, OpenweathermapActionObjectTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RESET_WEATHER:
      return initialState
    case ActionTypes.STORE_WEATHER:
      return {
        ...state,
        weather: action.payload.weather,
      }
    default:
      return state
  }
}
