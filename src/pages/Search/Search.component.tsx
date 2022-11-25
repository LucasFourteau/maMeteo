import { useNavigation } from '@react-navigation/native'
import React, { FunctionComponent, useState } from 'react'
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux'
import { OpenweathermapActions } from '../../redux/openweathermap/actions'
import { Button, Container, Input, Label, Title } from './Search.styles'

export const Search: FunctionComponent = () => {
  const [city, setCity] = useState<string>('')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const goTo = () => {navigation.navigate('Weather' as never)}

  const search = () => {
    if (city) {
      dispatch(OpenweathermapActions.cityWeather(city))
      goTo()
      setCity('')
    }
  }

  const geolocation = () => {
    Location.getCurrentPositionAsync({}).then((position) => {
      dispatch(OpenweathermapActions.positionWeather(position.coords.latitude, position.coords.longitude))
      goTo()
    })
  }

  return (
    <Container>
      <Title>Live{'\n'}Forecast</Title>
      <Input value={city} onChangeText={setCity} placeholder="Ma belle ville" />
      <Button onPress={search}>
        <Label>Recherche</Label>
      </Button>
      <Button onPress={geolocation}>
        <Label>Trouve moi comme un grand</Label>
        </Button>
    </Container>
  )
}
