import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Location from 'expo-location';
import 'react-native-gesture-handler'
import { compose } from 'recompose';
import { withRedux } from './hoc'
import { storeManager } from './lib/storeManager'
import { MainNavigationContainer } from './navigation'
import { store as reduxStore } from './redux/store'

Location.requestForegroundPermissionsAsync().then(({ status }) => {
  if (status !== 'granted') {
    alert("Permission non accordée pour la géoloc");
  }
});
 
const enhance = compose(withRedux)

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

  return (
    <AppContainer />
  )
}

export default AppComponent
