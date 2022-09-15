import React, { ComponentType, FunctionComponent } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"

export const withTheme = (Component: ComponentType): ComponentType => {
  const Theme: FunctionComponent<unknown> = () => (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  )
  return Theme
}
