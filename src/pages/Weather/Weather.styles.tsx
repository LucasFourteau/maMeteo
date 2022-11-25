import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native"
import { theme } from "../../theme"


export const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  text: {
    color: theme.white,
    marginTop: theme.unit *2,
  }
})

export const Container = styled.View`
  background-color: ${theme.background};
  flex: 1;
  padding: ${theme.unit * 4}px;
`

export const Title = styled.Text`
  font-size: ${theme.unit * 8}px;
  margin-top: ${theme.unit * 3}px;
  margin-bottom: ${theme.unit * 3}px;
  font-weight: bold;
  color: ${theme.white};
  align-self: center;
`

export const Temperature = styled.Text`
  font-size: ${theme.unit * 30}px;
  margin-bottom: ${theme.unit * 5}px;
  color: ${theme.white};
  align-self: center;
`

export const Gradient = styled(LinearGradient).attrs({ colors: [theme.white + '1A', theme.white + '40'] })`
  flex: 1;
  margin-bottom: ${theme.unit * 4}px;
  margin-left: ${theme.unit * 4}px;
  margin-right: ${theme.unit * 4}px;
  border-radius: ${theme.unit * 8}px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
`

export const Element = styled.View`
  flex: 50%;
  align-items: center;
  justify-content: center;
`
