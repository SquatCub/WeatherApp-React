import React from 'react';
import ForecastInfo from './ForecastInfo';
import '../styles/WheaterInfo.css';

const WeatherInfo = (props) => {
    
    const forecasts = props.forecast.map(forecast => {
        return (
            <ForecastInfo key={forecast.dt_txt} forecast={forecast} />
        );
    });

    return(
        <div className={`weather-display ${props.weather.weather[0].main}`}>
            <h1>City: {props.weather.name}</h1>
            <h2>{props.weather.weather[0].description}</h2>
            <h6>Temperature: {props.weather.main.temp}º</h6>
            <img alt={props.weather.name} src={props.icon} />
            <h4>Forecast</h4>
            <div className="forecasts">
                {forecasts}
            </div>
        </div>
    );
};
export default WeatherInfo;