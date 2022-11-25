import React, { ComponentType, FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export const withRedux = (Component: ComponentType): ComponentType => {
  const Redux: FunctionComponent<unknown> = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  )
  return Redux
}
