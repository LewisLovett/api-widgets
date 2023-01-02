import { useEffect, useState } from "react";
import "./WeatherWidget.scss";
import ForecastDisplay from "../ForecastDisplay/ForecastDisplay";
import ForecastContainer from "../../containers/ForecastContainer/ForecastContainer";
const WeatherWidget = ({latitude,longitude}) => {
    const [todayForecast, setTodayForecast] = useState();
    const [currentTime, setCurrentTime] = useState("");
    const [hourMessage, setHourMessage] = useState();
    const [weatherForecastDays, setWeatherForecastDays] = useState();


      const getWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3`;
        const res = await fetch(url);
        const data = await res.json();
        if(data.current){
          setCurrentTime(data.location.localtime);
          setTodayForecast({forecastTime:data.location.localtime,forecastText:data.current.condition.text,forecastIcon:data.current.condition.icon});
          populateForecast(data.forecast.forecastday);
        }else{
          console.log("data not recived");
        }
        
      }
      
      const populateForecast = (forecastData) =>{
        let forecastDays = [];
        forecastData.forEach(forecastDay => {
          
          const forecastHours = forecastDay.hour.map((forecastHour)=>{
            const time = forecastHour.time;
            const text = forecastHour.condition.text;
            const icon = forecastHour.condition.icon;
            return({forecastTime:time,forecastText:text,forecastIcon:icon}) 
          })
          forecastDays.push(forecastHours);
        });
        setWeatherForecastDays(forecastDays);
      }

 

    useEffect(()=>{
        getWeather();
    }, [longitude])

    useEffect(()=>{
      if(currentTime.substring(11,13) >= 18){
        setHourMessage("Good Evening");
      }else if(currentTime.substring(11,13) >= 12){
        setHourMessage("Good Afternoon");
      }else{
        setHourMessage("Good Morning");
      }
    }, [currentTime])

    return(
        <>
        {currentTime&&<p>{hourMessage}</p>}
        <h2>Forecast</h2>
        {todayForecast&&<ForecastDisplay forecastDay={todayForecast}/>}
        {weatherForecastDays&&weatherForecastDays.map((weatherForecastDay)=>{return <ForecastContainer forecastDays={weatherForecastDay}currentTime={currentTime}/>})}
        </>
    )
}
export default WeatherWidget