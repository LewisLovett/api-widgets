import "./ForecastContainer.scss";
import ForecastDisplay from "../../components/ForecastDisplay/ForecastDisplay";

const ForecastContainer = ({forecastDays,currentHour}) => {
    const forecastComponents = forecastDays.map((forecastDay)=>{
        const forcastDayHour = forecastDay.forecastTime.substring(11,13);
        
        if(currentHour<=forcastDayHour){
            return (<ForecastDisplay forecastDay={forecastDay}/>)
        }
    })
    return(
        <div className="forecast-container">
        {forecastComponents}
        </div>
    )
}
export default ForecastContainer 