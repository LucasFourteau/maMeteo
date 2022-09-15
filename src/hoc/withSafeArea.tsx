import React, { ComponentType, FunctionComponent } from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

export const withSafeArea = (Component: ComponentType): ComponentType => {
  const SafeArea: FunctionComponent<unknown> = () => (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Component />
    </SafeAreaProvider>
  )
  return SafeArea
}
