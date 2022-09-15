import { RootState } from '../reducers'

export const weatherSelector = (state: RootState) => state.openweathermap.weather
