import React from 'react';
import '../styles/ForecastInfo.css';

// Saber si la hora del pronostico es de dia o de noche 
const time = hour => {
    return hour > 6 && hour < 20 ? "d" : "n";
}

// Funcion para la conversion de kelvin a celsius
const convertDegrees = currentDegree => {
    return ((currentDegree-273.15).toFixed(2));
}

// Componente para pronostico
const ForecastInfo = (props) => {
    // Conversion de grados
    const celciusDegree = convertDegrees(props.forecast.main.temp);
    const celciusDegreeMin = convertDegrees(props.forecast.main.temp_min);
    const celciusDegreeMax = convertDegrees(props.forecast.main.temp_max);

    //Obtinene si es de dia o noche y el tiempo que hace
    const getDayNight = time(props.time.slice(13,15))+'-'+props.forecast.weather[0].main;

    //Return principal
    return(
        <div className={`forecast ${getDayNight}`} key={props.forecast.dt}>
            <h6>{props.time}</h6>
            <h6>{props.forecast.weather[0].main}</h6>
            <img alt={props.forecast.dt_txt} src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} />
            <p>Temperature: {celciusDegree}ºC</p>
            <p>Min: {celciusDegreeMin}ºC</p>
            <p>Max: {celciusDegreeMax}ºC</p>
        </div>
    );
};

export default ForecastInfo;