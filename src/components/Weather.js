import React from 'react'
import { TiWeatherSunny, TiWeahterCloudy, TiWeatherShower, TiWeatherStormy } from 'react-icons/ti'

const Weather = () => {
  return (
    <div className="whole-display">
      <h2 className="location">Washington DC</h2>
      <div className="weather-display">
        <div className="temp-display">
          <h2 className="temp">85&deg;</h2>
          <p className="condition">Sunny</p>
        </div>
        <TiWeatherSunny className="icon" />
      </div>
    </div>
  )
}

export default Weather
