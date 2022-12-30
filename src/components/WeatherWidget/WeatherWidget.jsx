import { useEffect, useState } from "react";
import "./WeatherWidget.scss";

const WeatherWidget = ({latitude,longitude}) => {
    const [localWeather, setLocalWeather] = useState();

    const [currentHour, setCurrentHour] = useState();
    const [hourMessage, setHourMessage] = useState();





      const getWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;
        const res = await fetch(url);
        const data = await res.json();
        if(data.current){
          setLocalWeather(data.current.condition.text);
        }else{
          console.log("data not recived");
        }
      }
      


    useEffect(()=>{
        const date = new Date();
        setCurrentHour(date.getHours());
    }, [])

    useEffect(()=>{
        getWeather();
    }, [longitude])

    useEffect(()=>{
      if(currentHour >= 18){
        setHourMessage("Good Evening");
      }else if(currentHour >= 12){
        setHourMessage("Good Afternoon");
      }else{
        setHourMessage("Good Morning");
      }
    }, [currentHour])

    return(
        <>
        <p>{hourMessage}</p>
        <p>The Weather is currently {localWeather}</p>
        </>
    )
}
export default WeatherWidget