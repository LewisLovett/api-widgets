import { useEffect, useState } from "react";
import './App.scss';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import ThreeWordsContainer from "./containers/ThreeWordsContainer/ThreeWordsContainer";
import WordsOfDayContainer from "./containers/WordsOfDayContainer/WordsOfDayContainer";


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
        {latitude && <WeatherWidget latitude={latitude} longitude={longitude}/>}
        {latitude && <ThreeWordsContainer latitude={latitude} longitude={longitude} />}
        {/* <WordsOfDayContainer/> */}
      </div>
    </div>
  );
}

export default App;
