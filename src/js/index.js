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
 setInterval(function(){
   
    
    ReactDOM.createRoot(document.getElementById('app')).render(<Home counter={counter} />);
     //render your react application
    counter++;}, 1000); 

  
