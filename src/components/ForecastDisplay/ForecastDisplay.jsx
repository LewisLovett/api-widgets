import "./ForecastDisplay.scss";

const ForecastDisplay = ({forecastDay}) => {
    return(
        <>
        <p>{forecastDay.forecastDate}</p>
        <p>{forecastDay.forecastText}</p>
        <img src={forecastDay.forecastIcon}/>
        </>
    )
}
export default ForecastDisplay