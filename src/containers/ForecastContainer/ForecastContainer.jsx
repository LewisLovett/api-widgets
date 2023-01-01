import "./ForecastContainer.scss";
import ForecastDisplay from "../../components/ForecastDisplay/ForecastDisplay";

const ForecastContainer = ({forecastDays}) => {
    const forecastComponents = forecastDays.map((forecastDay)=>{
        return (<ForecastDisplay forecastDay={forecastDay}/>)
    })
    return(
        <>
        {forecastComponents}
        </>
    )
}
export default ForecastContainer 