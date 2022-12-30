import { useEffect, useState } from "react";
import './App.scss';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import WordOfDayWidget from "./components/WordOfDayWidget/WordOfDayWidget";
import ThreeWordsContainer from "./containers/ThreeWordsContainer/ThreeWordsContainer";


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
      <div className="widget-container">
        <WeatherWidget latitude={latitude} longitude={longitude}/>
        <ThreeWordsContainer latitude={latitude} longitude={longitude} />
        <WordOfDayWidget/>
      </div>
    </div>
  );
}

export default App;
