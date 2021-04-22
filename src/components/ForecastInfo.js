import React from 'react';
import '../styles/ForecastInfo.css';

// Saber si la hora del pronostico es de dia o de noche 
const time = hour => {
    return hour > 6 && hour < 20 ? "d" : "n";
}

// Componente para pronostico
const ForecastInfo = (props) => {
    return(
        <div className={`forecast ${time(props.time.slice(11,13))}-${props.forecast.weather[0].main}`} key={props.forecast.dt}>
            <h6>{props.time}</h6>
            <h6>{props.forecast.weather[0].main}</h6>
            <img alt={props.forecast.dt_txt} src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} />
            <p>Temperature: {props.forecast.main.temp}º</p>
            <p>Min: {props.forecast.main.temp}º</p>
            <p>Max: {props.forecast.main.temp}º</p>
        </div>
    );
};

export default ForecastInfo;