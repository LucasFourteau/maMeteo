import _ from 'lodash'
import React, { FunctionComponent } from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import images from '../../assets/images'
import { weatherSelector } from '../../redux/openweathermap/selector'
import { RootState } from '../../redux/reducers'
import { theme } from '../../theme'
import { Container, Element, Gradient, styles, Temperature, Title } from './Weather.styles'

export const Weather: FunctionComponent = () => {
  const dispatch = useDispatch()
  const datas = useSelector((state: RootState) => weatherSelector(state))

  const isNight = () => _.indexOf(datas?.weather[0].icon, 'n') >= 1

  // useEffect(() => {
  //   return () => {
  //     dispatch(OpenweathermapActions.resetWeather())
  //   }
  // }, [])

  if (!datas) return null


  return (
    <Container style={{ backgroundColor: !isNight() ? theme.primary : theme.secondary }}>
      <Title>{datas.name}</Title>
      <View style={styles.icon}>
        <Image source={images[`icon${datas.weather[0].icon}`]} />
      </View>
      <Temperature>
        {Math.round(datas.main.temp)}°
      </Temperature>
      <Gradient>
        <Element>
          <Icon name="thermometer-minus" size={48} color={theme.white} />
          <Text style={styles.text}>{datas.main.temp_min}°</Text>
        </Element>
        <Element>
          <Icon name="thermometer-plus" size={48} color={theme.white} />
          <Text style={styles.text}>{datas.main.temp_max}°</Text>
        </Element>
        <Element>
          <Icon name="gauge" size={48} color={theme.white} />
          <Text style={styles.text}>{datas.main.pressure} hPa</Text>
        </Element>
        <Element>
          <Icon name="windsock" size={48} color={theme.white} />
          <Text style={styles.text}>{datas.wind.speed}km/h</Text>
        </Element>
      </Gradient>
    </Container>
  )
}
