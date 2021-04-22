import React from 'react';
import ForecastInfo from './ForecastInfo';
import '../styles/WheaterInfo.css';

const hour = dt => {
    let changedHour = ''
    const currentHour = dt.slice(0,2);
    let cdtHour = parseInt(currentHour) + 5;
    if(cdtHour > 23) {
        cdtHour = cdtHour-24;
    }
    cdtHour > 9 ? changedHour = cdtHour : changedHour= '0'+cdtHour;
    changedHour+=dt.slice(2,5);
    return changedHour
}

const time = hour => {
    return hour > 6 && hour < 20 ? "d" : "n";
}

const WeatherInfo = (props) => {

    const sunrise = new Date(((props.weather.dt+props.weather.timezone)*1000)+5).toString();
    const currentTime = hour(sunrise.slice(16,21));
    const getTime = time(currentTime.slice(0,2));

    const forecasts = props.forecast.map(forecast => {
        const forecastSunrise = new Date(((forecast.dt+props.weather.timezone)*1000)+5).toString();
        const forecastTime = forecastSunrise.slice(0,10) +" "+ hour(forecastSunrise.slice(16,21));
        return (
            <ForecastInfo key={forecast.dt_txt} time={forecastTime} forecast={forecast} />
        );
    });

    return(
        <div className={`weather-display ${getTime}-${props.weather.weather[0].main}`}>
            {}
            <h1 className="display-4">{props.weather.name}</h1>
            <h2>{props.weather.weather[0].description}</h2>
            <h5>Temperature: {props.weather.main.temp}º</h5>
            <h6>{currentTime} CDT</h6>
            <img alt={props.weather.name} src={props.icon} />
            <h4>Forecast</h4>
            <div className="forecasts">
                {forecasts}
            </div>
        </div>
    );
};
export default WeatherInfo;