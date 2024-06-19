import React, { useState} from "react";
import { API_KEY } from "../api_cred";

const Weather = () => {

    // const [city, setCity] = useState("");
    const [unit, setUnit] = useState('metric');
    // const [weather, setWeather] = useState({});

    const locationData = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Pune&limit=5&appid=${API_KEY}`)
    locationData.then( res => res.json())
    .then(result => {
        // console.log(result[0].lat, result[0].lon);
        const lat = result[0].lat;
        const lon = result[0].lon;
    });

    let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=${API_KEY}&units=${unit}`)
    data.then(
    res => res.json())
    .then(result => console.log(result))

    
  return (
    <div>Weather</div>
  )
}

export default Weather