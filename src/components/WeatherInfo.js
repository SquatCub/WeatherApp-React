import React from 'react';
import '../styles/WheaterInfo.css';

const WeatherInfo = (props) => {
    
    const forecasts = props.forecast.map(forecast => {
        console.log(forecast);
        return (
            <div className="forecast" key={forecast.dt}>
                <h6>{forecast.dt_txt}</h6>
                <h6>{forecast.weather[0].main}</h6>
                <img alt={forecast.dt_txt} src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} />
                <p>Temperature: {forecast.main.temp}º</p>
                <p>Min: {forecast.main.temp}º</p>
                <p>Max: {forecast.main.temp}º</p>
            </div>
        );
    });

    return(
        <div className={`weather-display ${props.weather.weather[0].main}`}>
            <h1>City: {props.weather.name}</h1>
            <h2>{props.weather.weather[0].description}</h2>
            <img alt={props.weather.name} src={props.icon} />
            <h4>Forecast</h4>
            <div className="forecasts">
                {forecasts}
            </div>
            
        </div>
    );
};
export default WeatherInfo;