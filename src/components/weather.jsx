import React from "react";
import { API_KEY } from "../api_cred";

const Weather = () => {

    let data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`)
    console.log(data);
  return (
    <div>Weather</div>
  )
}

export default Weather