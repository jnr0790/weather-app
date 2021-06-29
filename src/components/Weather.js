import React from 'react'
import { TiWeatherSunny, TiWeahterCloudy, TiWeatherShower, TiWeatherStormy } from 'react-icons/ti'

const Weather = () => {
  return (
    <div className="weather-display">
      <h2 className="location">Washington DC</h2>
      <div className="temp-display">
        <h2 className="temp">85&deg;</h2>
        <p className="condition">Sunny</p>
        <h2 className="icon"> <TiWeatherSunny /></h2>
      </div>
    </div>
  )
}

export default Weather
