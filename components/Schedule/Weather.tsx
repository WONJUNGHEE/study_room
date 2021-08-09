import { useState, useEffect } from "react";
import React from "react";

import axios from "axios";

//32f4e1ebe302c6c3721c8c07d8065150 api 키

interface weatherdata {
  temp: number;
  humidity: number;
  weather: string;
  weather_desription: string;
  weather_icon: string;
  wind_speed: string;
  city_name: string;
  clouds: string;
}

function Weather() {
  const [Data, setData] = useState<weatherdata>({
    temp: 0,
    humidity: 0,
    weather: "",
    weather_desription: "",
    weather_icon: "",
    wind_speed: "",
    city_name: "",
    clouds: "",
  });
  function weather_data(): any {
    return axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=32f4e1ebe302c6c3721c8c07d8065150"
      )
      .then((response) =>
        setData({
          temp: Math.ceil((response.data.main.temp - 273.15) * 10) / 10,
          humidity: response.data.main.humidity,
          weather: response.data.weather[0].main,
          weather_desription: response.data.weather[0].description,
          weather_icon: response.data.weather[0].icon,
          wind_speed: response.data.wind.speed,
          city_name: response.data.name,
          clouds: response.data.clouds.all,
        })
      )
      .catch((error) => console.log(error));
  }

  //30분 마다 날씨 업데이트
  useEffect(() => {
    weather_data();
    setInterval(() => {
      weather_data();
    }, 1800000);
  }, []);
  return (
    <div>
      <div>
        {Data.city_name} 온도 : {Data.temp}°C
      </div>
    </div>
  );
}

export default Weather;
