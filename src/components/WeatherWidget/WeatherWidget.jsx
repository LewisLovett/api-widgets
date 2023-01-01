import { useEffect, useState } from "react";
import "./WeatherWidget.scss";
import ForecastDisplay from "../ForecastDisplay/ForecastDisplay";
import ForecastContainer from "../../containers/ForecastContainer/ForecastContainer";
const WeatherWidget = ({latitude,longitude}) => {
    const [todayForecast, setTodayForecast] = useState();
    const [currentHour, setCurrentHour] = useState();
    const [hourMessage, setHourMessage] = useState();
    const [weatherForecastDays, setWeatherForecastDays] = useState();


      const getWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`;
        const res = await fetch(url);
        const data = await res.json();
        if(data.current){
          setTodayForecast({forecastTime:data.location.localtime,forecastText:data.current.condition.text,forecastIcon:data.current.condition.icon});
          populateForecast(data.forecast.forecastday[0].hour);
        }else{
          console.log("data not recived");
        }
        
      }
      
      const populateForecast = (forecastData) =>{
        const forecastInfo = forecastData.map((forecastDay)=>{
          const time = forecastDay.time;
          const text = forecastDay.condition.text;
          const icon = forecastDay.condition.icon;
          return({forecastTime:time,forecastText:text,forecastIcon:icon})
          
        })
        
        setWeatherForecastDays(forecastInfo);
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
        {todayForecast&&<ForecastDisplay forecastDay={todayForecast}/>}
        {weatherForecastDays&&currentHour&&<ForecastContainer forecastDays={weatherForecastDays}currentHour={currentHour}/>}
        </>
    )
}
export default WeatherWidget