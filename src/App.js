import { useEffect, useState } from "react";
import './App.css';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import MapWidget from "./components/MapWidget/MapWidget";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitide] = useState();

  const successCallback = (position) => {
    setLatitude(position.coords.latitude);
    setLongitide(position.coords.longitude);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
}, [])
  return (
    <div className="App">
      <h1>Hello</h1>
      <WeatherWidget latitude={latitude} longitude={longitude}/>
      <ThreeWordsWidget latitude={latitude} longitude={longitude}/>
    </div>
  );
}

export default App;
