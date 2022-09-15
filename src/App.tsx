import React, { FunctionComponent, useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service'
import 'react-native-gesture-handler'
import { compose } from 'recompose'
import { withRedux, withSafeArea } from './hoc'
import { storeManager } from './lib/storeManager'
import { MainNavigationContainer } from './navigation'
import { store as reduxStore } from './redux/store'

Geolocation.requestAuthorization('always')

const enhance = compose(withRedux, withSafeArea)

const AppContainer = enhance(MainNavigationContainer)

const AppComponent: FunctionComponent = () => {
  const [store, setStore] = useState()

  useEffect(() => {
    storeManager.store = reduxStore
    const newStore = storeManager.store as never
    setStore(newStore)
  }, [])

  if (!store) {
    return null
  }

  return <AppContainer />
}

export default AppComponent
