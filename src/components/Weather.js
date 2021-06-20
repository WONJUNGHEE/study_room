import { React,useState} from 'react';
import axios from 'axios';

//32f4e1ebe302c6c3721c8c07d8065150 api 키

function Weather() {
  const [Data, setData] = useState();
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=32f4e1ebe302c6c3721c8c07d8065150').then(response=>setData(Math.ceil((response.data.main.temp-273.15)*10)/10));
    

    return (
      <div>
        <div>서울 온도 : {Data}°C</div>
            </div>
        )
}

export default Weather;