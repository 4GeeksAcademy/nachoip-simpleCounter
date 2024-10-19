//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application




let counter = 0;
let intervalId = null;
const root = ReactDOM.createRoot(document.getElementById('app'));

function renderApp() {
   root.render(<Home counter={counter} startCounter={startCounter} stopCounter={stopCounter} resetTimer={resetTimer} />);

}

function startCounter() {
   if (!intervalId) {
      intervalId = setInterval(function () {
         counter++;
         renderApp()
         //render your react application
      }, 1000);
   }
}


const stopCounter = () => {
   if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
   }
}
const resetTimer = () => {
   stopCounter()
   counter = 0
   renderApp()
   //startCounter()

}
renderApp()
startCounter();