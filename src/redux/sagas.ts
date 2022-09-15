import { all, AllEffect } from 'redux-saga/effects'
import { loaCitydWatcher, loadPositionWatcher } from './openweathermap/saga'

export function* rootSaga(): Generator<AllEffect<unknown>, void, unknown> {
  yield all([loaCitydWatcher(), loadPositionWatcher()])
}
