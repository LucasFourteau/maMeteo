import { Action, combineReducers } from 'redux'
import { OpenweathermapReducer } from './openweathermap/reducers'
import { OpenweathermapState } from './openweathermap/types'

const appReducer = combineReducers({
  openweathermap: OpenweathermapReducer,
})

export interface RootState {
  openweathermap: OpenweathermapState
}

type RootReducer = ReturnType<typeof appReducer>

export const rootReducer = (state: RootState | undefined, action: Action): RootReducer => appReducer(state, action)
