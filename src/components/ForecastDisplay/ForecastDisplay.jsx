import "./ForecastDisplay.scss";

const ForecastDisplay = ({forecastDay}) => {
    return(
        <div className="forcast-block">
            <img src={forecastDay.forecastIcon}/>
            <p>{forecastDay.forecastTime.substring(10,16)}</p>
            <p>{forecastDay.forecastText}</p>
        </div>
    )
}
export default ForecastDisplay