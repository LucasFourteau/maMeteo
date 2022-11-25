import { ActionsOfType } from '@martin_hotell/rex-tils'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { OpenweathermapApi } from '../../api'
import { OWM } from '../../api/Openweathermap/types'
import { OpenweathermapActionObjectTypes, OpenweathermapActions } from './actions'
import { ActionTypes } from './types'

function* loadCity({ payload }: ActionsOfType<OpenweathermapActionObjectTypes, ActionTypes.LOAD_CITY_WEATHER>) {
  try {
    const data: OWM = yield call(OpenweathermapApi.loadCity, payload.city)
    yield put(OpenweathermapActions.storeWeather(data))
  } catch ({ message }) {
    console.error('loadCity', message)
  }
}

function* loadPosition({ payload }: ActionsOfType<OpenweathermapActionObjectTypes, ActionTypes.LOAD_POSITION_WEATHER>) {
  try {
    const data: OWM = yield call(OpenweathermapApi.loadPosition, payload)
    yield put(OpenweathermapActions.storeWeather(data))
  } catch ({ message }) {
    console.error('loadCity', message)
  }
}

export function* loaCitydWatcher() {
  yield takeEvery(ActionTypes.LOAD_CITY_WEATHER, loadCity)
}

export function* loadPositionWatcher() {
  yield takeEvery(ActionTypes.LOAD_POSITION_WEATHER, loadPosition)
}
