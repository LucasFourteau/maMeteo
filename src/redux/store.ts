import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Task } from 'redux-saga'
import { middlewares, sagaMiddleware } from './middlewares'
import { rootReducer } from './reducers'
import { rootSaga } from './sagas'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

const reloadSaga = (rootSagaTask: Task) => {
  rootSagaTask.toPromise().catch((e: Error) => {
    console.error({ message: e.message, source: 'sagaError' })
    reloadSaga(sagaMiddleware.run(rootSaga))
  })
}

const rootSagaTask = sagaMiddleware.run(rootSaga)
reloadSaga(rootSagaTask)
