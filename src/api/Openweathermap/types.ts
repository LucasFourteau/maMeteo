const response = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 298.74,
    feels_like: 298.82,
    temp_min: 297.11,
    temp_max: 300.52,
    pressure: 1011,
    humidity: 56,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 180,
  },
  clouds: {
    all: 98,
  },
  dt: 1662988949,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1662960626,
    sunset: 1663007014,
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200,
}

export type OWM = typeof response
