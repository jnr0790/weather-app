# Weather App
A web application where you can see the current weather in whatever location you search.

## Links
- [Weather App Client]()

## User Stories
- As a user I want to be able to search for a city
- As a user I want to see the current weather for that city

## Planning
In this project I plan to work on the basic styling first. Followed by working on the API responses to the users inputs.

## Technologies Used
- React
- CSS/FlexBox

## Wireframe
##### V1
![Weather App](https://i.imgur.com/isMGRgf.png)

## Instructions
#### Set Up
1. Move into the folder you wish to create this app in.
2. Create a new react app using `npx create-react-app app-name`in the terminal. (`app-name` can be named whatever you'd like)
3. Move into the new directory using `cd weather-app`.
4. **OPTIONAL** Remove uneccessary files and code.
    - In the `src` folder delete `App.css`(unless you plan on styling each component separately), `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
    - In the `public` folder delete `logo192.png` and `logo512.png`
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
5. Empty the `README.md` and fill with your own content.
6. Create a new Git Hub repository.
7. Copy your repositories URL or SSH.
8. Run `git remote add origin URLorSSH`. (`URLorSSH` should be replaced with the URL or SSH to your repository)
9. `git add .` and `git commit` your changes.
10. Push your changes with `git push -u origin branch-name`.(`branch-name` should be replaced with the name of the main branch you'll use for production.)
