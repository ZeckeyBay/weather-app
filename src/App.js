import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const key = "bc26f501bad96b7db6ab07f32120e229"
  const [data,setData] = useState({});
  const [location,setLocation] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;
 
  const searchLocation = (event) =>{
    if (event.key === "Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className="App">
      <div className="search">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter a Location..."
        type="text"/>
      </div>
        <div className='container'>
            <div className='top-container'>
                  <div className='location'>
                      {data.sys ? <p>{data.name},{data.sys.country}</p>:null}
                  </div>
                  <div className='temp'>
                    {data.main ? <h2>{data.main.temp}</h2>:null}
                  <div className='temp-maxmin'>
                    {data.main ? <h3>{data.main.temp_max}</h3>:null}
                    {data.main ? <h3>{data.main.temp_min}</h3>:null}
                  </div>
                  <div className='description'>
                    {data.weather ? <p>{data.weather[0].main}</p>:null}
                    {data.weather ? <img className='weather-icon' src={`icons/${data.weather[0].icon}.png`} alt="" width="100px" height="100px"/>:null}
                  </div>   
                </div>
            </div>
            <div className='bot-container'>
                <div className='feelslike'>
                  {data.main ? <p>{data.main.feels_like}</p>:null}
                </div>
                <div className='humidity'>
                  {data.main ? <p>{data.main.humidity}</p>:null}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
