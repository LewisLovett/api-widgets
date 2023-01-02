import { useEffect, useState } from "react";
import "./ForecastContainer.scss";
import ForecastDisplay from "../../components/ForecastDisplay/ForecastDisplay";

const ForecastContainer = ({forecastDays,currentTime}) => {
    const [forecastShown, setForecastShown] = useState(false);
    const forecastComponents = forecastDays.map((forecastDay)=>{
        const forcastDayHour = forecastDay.forecastTime.substring(11,13);
        const forcastDayDate = forecastDay.forecastTime.substring(0,10);
        const currentHour = currentTime.substring(11,13);
        const currentDate = currentTime.substring(0,10);

        if(currentHour<=forcastDayHour || forcastDayDate !== currentDate){
            return (<ForecastDisplay forecastDay={forecastDay}/>)
        }
    })
    const toggleContainer = () =>{
        setForecastShown(!forecastShown);
    }
    return(
        <div className="forecast-display">
            <h3 className="forecast-display__header" onClick={toggleContainer}>See forecast for {forecastDays[0].forecastTime.substring(0,10)}</h3>
            {forecastShown&&<div className="forecast-display__forecast-blocks">
                {forecastComponents}
            </div>}
        </div>
    )
}
export default ForecastContainer 