import { useState } from 'react'
import { TiWeatherSunny, /* TiWeahterCloudy, TiWeatherShower, TiWeatherStormy, TiWeatherCloudy */ } from 'react-icons/ti'
import Input from './Input'

const apiKey = 'aeedf4e8f26df6c30697c5f043457c41'

const Weather = (props) => {

  const [weather, setWeather] = useState({
    temp: '',
    condition: '',
    city: '',
    country: ''
  })
  const [location, setLocation] = useState('')

  const handleChange = event => {
    event.persist()

    setLocation(prevLocation => {

      const updatedInput = { [event.target.name]: event.target.value }

      const createdLocation = Object.assign({}, prevLocation, updatedInput)

      return createdLocation.location
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
          city: data.name,
          country: data.sys.country
        })

        setLocation('')
      })
      .catch(console.error)
  }
  let weatherShow = null

  if (!weather.temp) {
    weatherShow = <div>
    </div>
  } else {
    weatherShow = <div>
      <h2 className="location">{weather.city}, {weather.country}</h2>
      <div className="weather-display">
        <div className="temp-display">
          <h2 className="temp">{Math.round(weather.temp)}&deg;</h2>
          <p className="condition">{weather.condition}</p>
        </div>
        <TiWeatherSunny className="icon" />
      </div>
    </div>
  }

  return (
    <div className="whole-display">
      <Input
        location={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {weatherShow}
    </div>
  )
}

export default Weather
