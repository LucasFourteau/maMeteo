import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Search, Weather } from '../pages'
import { Routes } from './Routes'

const Stack = createStackNavigator()

export const MainNavigationContainer = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Search} component={Search} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Routes.Weather} component={Weather} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
)
