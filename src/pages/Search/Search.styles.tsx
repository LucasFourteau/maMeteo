import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native"
import { theme } from "../../theme"

export const Container = styled(LinearGradient).attrs({ colors: [theme.primary + 'CC', theme.primary + 'FF'] })`
  flex: 1;
  justify-content: center;
  padding: ${theme.unit * 4}px;
`

export const Input = styled.TextInput.attrs({ placeholderTextColor: theme.white })`
  height: ${theme.unit * 10}px;
  border-width: ${theme.unit / 4}px;
  padding: ${theme.unit * 2}px;
  border-radius: ${theme.unit * 2}px;
  border-color: ${theme.white};
  margin-bottom: ${theme.unit * 6}px;
  color: ${theme.white};
`

export const Title = styled.Text`
  font-size: ${theme.unit * 16}px;
  margin-bottom: ${theme.unit * 20}px;
  font-weight: bold;
  color: ${theme.white};
`

export const Button = styled.Pressable`
  background-color: ${theme.button};
  height: ${theme.unit * 10}px;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.unit * 2}px;
  margin-bottom: ${theme.unit * 6}px;
`

export const Label = styled.Text`
  color: white;
`