# Weather App
A web application where you can see the current weather in whatever location you search.

## Links
- [Weather App Client](https://juanromero.dev/weather-app/)

## User Stories
- As a user I want to be able to search for a city
- As a user I want to see the current weather for that city

## Planning
In this project I plan to work on the setting up the components and basic styling first. Followed by making the API calls and responses from the users inputs using hooks.


## Technologies Used
- React
- CSS

## Unsolved Problems/Future Plans
- Only showing the `weather-display` when there has been a successful search.
- Dynamically updating the weather icon.
- Adding backgrounds that change depending on the temprature.
- Styling the content accordingly to the background.
- Including 10 day forcast.

## Wireframe
##### V1
![Weather App](https://i.imgur.com/isMGRgf.png)

## Instructions
#### Set Up
1. Move into the folder you wish to create this app in.
2. Create a new react app using `npx create-react-app app-name`in the terminal. (`app-name` can be named whatever you'd like)
3. Move into the new directory using `cd weather-app`.
4. In the terminal run `npm start` to open the browser with the app on the local host
5. **OPTIONAL** Remove uneccessary files and code.
    - In the `src` folder delete `App.css`(unless you plan on styling each component separately), `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
    - In the `public` folder delete `logo512.png`
    - In `index.js` remove line 5 and 13 - 16. Leaving the file with
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```
    - In `App.js` remove lines 1 - 2 and lines 4 - 20. Leaving the file with
    ```js
    function App() {
      return (
        <div className="App">

        </div>
      );
    }

    export default App;
    ```
    - In `index.css` remove all code leaving the file blank.
    - Empty the `README.md` and fill with your own content.

#### Input
1. Create a new folder named `components`.
2. In that folder create a new file named `Input.js`.
3. In `Input.js` you want to start by creating a functional component.
4. In that component you want to return a JSX form with `className="input"`.
5. Inside that form include an `input` element.
6. Inside the opening `input` tag include the following attributes `type="text"` `name="location"` `className="search-box"` and `placeholder="Insert City Here"`.
6. After the `input` element, staying inside the `form` create a `button` element.
7. Inside the opening `button` tag include `className="btn"` and `type="submit"` attributes.
8. Finally, export the `Input` function using `export default`.

Your `Input.js` file should look similar to the code below.

```js
const Input = () => {

  return (
    <form className="input">
      <input
        type="text"
        name='location'
        className="search-box"
        placeholder="Insert City Here"
      />
      <button className="btn" type="submit">Get Weather</button>
    </form>
  )
}

export default Input
```

#### General Basic Styling
1. Navigate to `index.css`.
2. Begin with importing the Nunito font from google fonts. `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');`.
3. On a new line, add an asterisk selector `*` with a `margin` and `padding` property, each set to `0`.
4. Now, select the `body` including the following properties `font-family: Nunito, sans-serif;` and `text-align: center;`.

The `index.css` should look as follows

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Nunito, sans-serif;
  text-align: center;
}
```

#### Input Basic Styling
1. Call the `input` `className` using the class selector `.input`.
2. The properties in `.input` should be a `margin` of `20px`.
3. Now we'll target the `search-box` and `btn` classes jointly with a comma in between the classes. `.search-box, .btn`.
4. The properties here will be `margin: 5px;` `height: 25px;` and `border: none;`
5. Now target the `search-box` class alone with `.search-box`.
6. The properties we'll add here are `background-color: transparent;` `width: 250px;` and `border-bottom: #000 solid 2px;`
7. Next we'll target the `btn` class with `.btn`.
8. In this selector we'll have `background-color: #000;` `color: #fff;` `padding: 5px;` and `border-radius: 5px;`

The `index.css` file should have the following code underneath the previous code.
```css
/* INPUT */

.input {
  margin: 20px;
}

.search-box, .btn {
  margin: 5px;
  height: 25px;
  border: none;
}
.search-box {
  background-color: transparent;
  width: 250px;
  border-bottom: #000 solid 2px;
}
.btn {
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}
```

#### Weather
1. Navigate to the `components` folder and create a new file named `Weather.js` in that folder.
3. Begin by importing the `Import` function from the `Input.js` file using `import Input from './Input'`.
4. We want to use icons to show the conditions graphically so, in the terminal run `npm install react-icons`.
5. Back in the `Weather.js` we will import the Typicons weather from `react-icons/ti` using `import { TiWeatherSunny } from 'react-icons/ti'`.
6. Now, we create a functional component named `Weather` which we will export in the end of this file.
7. In the function we will return a JSX `div` with a `className="whole-display"` attribute.
8. Inside this `div` we will add a tag with the imported `Input` component with `<Input />`.
9. Underneath that `Input` component tag add an `h2` tag with the `className="location"` attribute.
10. Inside the `h2` tags we'll use a filler city for now. I used `Washington DC, US` for this example.
11. On the next line create a `div` with the attribute of `className="weather-display"`.
12. Inside this `div` add another `h2` element with attribute `className="temp"`.
13. Inside these `h2`tags we'll use `75&deg;` as the filler text. (note: `&deg;` = the degree symbol)
14. Below the `h2` with the `temp` class add a paragraph `p` element with the attribute `className="condition"`.
15. We'll use `Sunny` as the filler condition inside `p` tags.
16. Outside of the `div` with the `temp-display` class but remaining inside the `whole-display` `div`; We'll create a tag with the `TiWeatherSunny` icon we imported with an attribute of `className="icon"`. It should be `<TiWeatherSunny className="icon" />`
17. Outside of the entire funtion we need to export the `Weather` function with `export default Weather`

The `Weather.js` file should look like the code below
```js
import Input from './Input'
import { TiWeatherSunny } from 'react-icons/ti'

const Weather = () => {

  return (
    <div className="whole-display">
      <Input />
      <h2 className="location">Washington DC</h2>
      <div className="weather-display">
        <div className="temp-display">
          <h2 className="temp">75&deg;</h2>
          <p className="condition">Sunny</p>
        </div>
        <TiWeatherSunny className="icon" />
      </div>
    </div>
  )
}

export default Weather
```
18. To actually see everything that's been done so far in the browser, navigate to `App.js` and import the `Weather.js` file on the very top of the file with `import Weather from './components/Weather'`.
19. After importing we'll create a `Weather` tag inside the `div` with the `className="app"` attribute. It should be `<Weather />`
20. For this to show on the browser `npm start` should be running in the terminal.

The `App.js` file should now look like this
```js
import Weather from './components/Weather'

function App() {

  return (
    <div className="app">
      <Weather />
    </div>
  );
}

export default App;

```

#### Weather Basic Style
1. We'll start by calling the `location` class with `.location` with a property of `font-size: 30px;`.
2. Below that we'll target the `weather-display` class with `.weather-display`.
3. The properties and values here will be `border-radius: 20px;` `background-color: #00000060;` `width: 30%;` and `margin: 0 auto;`
4. Now we'll target both the `temp-display` and `icon` classes by using `.temp-display, .icon`
5. In this call the propert will be `display: inline-block;`
6. The next class to target is the `temp-display` alone with a property of `margin-right: 15%`.
7. Now targeting `.temp` we'll change the font size by adding the property of `font-size: 50px`
8. Next we target the `condition` class with `.condition` and changing the font size with a `font-size: 20px;` property and value.
9. Finally the `icon` class will be called with the property and value of `font-size: 90px;`


Your `index.css` file should have the following underneath the code from the Input styling
```css
/* WEATHER */

.location {
  font-size: 30px;
}

.weather-display {
  border-radius: 20px;
  background-color: #00000060;
  width: 30%;
  margin: 0 auto;
}

.temp-display, .icon {
  display: inline-block;
}

.temp-display {
  margin-right: 15%;
}

.temp {
  font-size: 50px;
}

.condition {
  font-size: 20px;
}

.icon {
  font-size: 90px;
}
```
You should be able to see the changes in the browser.

#### API Call
1. For the API call we'll begin by sigining up and obtaining an API key from https://openweathermap.org/.
2. Back in the text editor we have to navigate to `Weather.js` file in the `components` folder.
3. We'll be using hooks for this so, we need to import `useState` from React.
4. On the first line type `import { useState } from 'react'`.
5. Under all the imports we'll declare a `const` for the API key named `apiKey` that equals a string with the API key you obtained from openweathermap.org.
6. Inside the `Weather` function we'll create our `weather` hooks with an object `const [weather, setWeather] = useState({})`
7. Inside that object we'll have the keys with empty strings for the initial state. the keys will be `temp: '',` `condition: '',` `city: '',` and `country: ''`.
8. We'll also create a second set of hooks for `location` with an empty string like `const [location, setLocation] = useState('')`

This is how the hooks should look
```js
const [weather, setWeather] = useState({
  temp: '',
  condition: '',
  city: '',
  country: ''
})
const [location, setLocation] = useState('')
```
9. Next we'll create a `handleChange` function with an `event` parameter.
10. Inside this function we'll begin with an `event.persist()`.
11. Continuing inside this function we'll set the state for `location` using the `setLocation` callback function.
12. Inside the `setLocation` callback we'll pass `prevLocation` with an arrow function.
13. Nested in this function we'll create a `const` named `updatedInput` that equals and object with the key being `[event.target.name]:` and the value being `event.target.value`.
14. On a new line we'll create a `const` named `createdLocation` that equals `Object.assign({}, prevLocation, updatedLocation)`. This updates the `prevLocation` with the `updatedLocation`.
15. Final step inside this `prevLocation` function is returning `createdLocation.location` which holds our `location` string that is submitted through the form. (note: the form still doesn't have this funtionality until we pass the functions through)

The `handleChange` function should look like this
```js
const handleChange = (event) => {
  event.persist()
  setLocation(prevLocation => {
    const updatedInput = { [event.target.name]: event.target.value }
    const createdLocation = Object.assign({}, prevLocation, updatedInput)
    return createdLocation.location
  })
}
```

15. Now we'll make the actual API call inside a new function named `handleSubmit` with `event` as a parameter.
16. Inside this function we'll begin with an `event.preventDefault()` to prevent the default refresh action upon clicking submit.
17. On a new line we'll use `fetch()` to make the GET call to the openweathermap API.
18. Copy the API link from https://openweathermap.org/current `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
19. Inside the parenthesis of the `fetch()` call, paste the link. (note: Do not forget the `https://` on the link)
20. The next line will have the `.then()` promise with `res => res.json()` inside the parenthesis.
21. A second `.then()` will be created with `data => {}` inside the parenthesis.
22. Inside the function brackets we'll have `setWeather()` hook to update the state of the `weather` object.
23. Inside the parenthesis of `setWeather` include and object with `temp: data.main.temp` `condition: data.weather[0].main` `city: data.name` and `country: data.sys.country`.
24. Outside of the `setWeather` hook but inside the current `.then` you'll want the state of location to reset to an empty string by typing `setLocation('')`.
25. On the next line outside of the `.then` add a `.catch(console.error)` should anything go wrong in the handleSubmit function.

This block of code should look like this
```js
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
```

26. For the information to actually pass through we need to pass the `handleSubmit` and `handleChange` functions to the Input component as attribute values.
27. Inside the `Input` component tag we have to add the following attributes and values `location={location}` `handleChange={handleChange}` and `handleSubmit={handleSubmit}`

The `Input` component tag in the `Weather.js` JSX should now look like this
```js
<Input
  location={location}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
/>
```

28. Now, navigate to the `Input.js` file to continue passing through these functions.
29. Inside the `Input` function parenthesis we have to pass an object as a parameter with the functions like so `{ location, handleChange, handleSubmit }`.
30. In the opening `form` tag in the return we need to include an attribute and value of `onSubmit={handleSubmit}`
31. Inside the `input` tag we need to add the attributes and values of `value={location}` and `onChange={handleChange}`

Your `Input.js` file should now look like this
```js
const Input = ({ location, handleChange, handleSubmit }) => {

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        name='location'
        className="search-box"
        placeholder="Insert City Here"
        onChange={handleChange}
      />
      <button className="btn" type="submit">Get Weather</button>
    </form>
  )
}

export default Input
```

32. Now that we have the info we need, we need to replace the filler text with the actual data.
33. Navigate back to the `Weather.js` file and scroll to the JSX in the return.
34. In the `h2` tag with the class of `location` replace the `Washington DC` with `{weather.city}` and `US` with `{weather.country}`
35. In the second `h2` tag with the class of `temp` replace the `75` with `{Math.round(weather.temp)}` keeping the `&deg;`
36. The `Sunny` inside the `p` tags with the class of `condition` should be replaced with `{weather.condition}`

This will allow for the text fields to update dynamically.

Your `Weather.js` file shoould now look like the code below
```js
import { useState } from 'react'
import Input from './Input'
import { TiWeatherSunny } from 'react-icons/ti'

const apiKey = 'YOUR API KEY HERE'

const Weather = () => {

  const [weather, setWeather] = useState({
    temp: '',
    condition: '',
    city: '',
    country: ''
  })
  const [location, setLocation] = useState('')

  const handleChange = (event) => {
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

  return (
    <div className="whole-display">
      <Input
        location={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2 className="location">{weather.city}, {weather.country}</h2>
      <div className="weather-display">
        <div className="temp-display">
          <h2 className="temp">{Math.round(weather.temp)}&deg;</h2>
          <p className="condition">{weather.condition}</p>
        </div>
        <TiWeatherSunny className="icon" />
      </div>
    </div>
  )
}

export default Weather

```
