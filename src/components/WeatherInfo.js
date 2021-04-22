import React from 'react';
import ForecastInfo from './ForecastInfo';
import '../styles/WheaterInfo.css';

// Funcion para la conversion de datetime a hora local en zona CDT para mejor experiencia
const hour = dt => {
    let changedHour = ''
    const currentHour = dt.slice(0,2);
    let cdtHour = parseInt(currentHour) + 5;
    if(cdtHour > 23) {
        cdtHour = cdtHour-24;
    }
    cdtHour > 9 ? changedHour = cdtHour : changedHour= '0'+cdtHour;
    changedHour+=dt.slice(2,5);
    return changedHour;
}

// Funcion para determinar si es de dia o de noche
const time = hour => {
    return hour > 5 && hour < 20 ? "d" : "n";
}

// Funcion para la conversion de kelvin a celsius
const convertDegrees = currentDegree => {
    return ((currentDegree-273.15).toFixed(2));
}

// Componente principal
const WeatherInfo = (props) => {
    // Constantes para el cambio de datetime a hora local CDT
    const sunrise = new Date(((props.weather.dt+props.weather.timezone)*1000)+5).toString();
    const currentTime = hour(sunrise.slice(16,21));
    const getTime = time(currentTime.slice(0,2));
    const currentDate = sunrise.slice(0,10)+' - '+currentTime+' CDT';

    // constante que contiene los grados en celcius
    const celciusDegree = convertDegrees(props.weather.main.temp);
    const celciusDegreeMin = convertDegrees(props.weather.main.temp_min);
    const celciusDegreeMax = convertDegrees(props.weather.main.temp_max);
    
    //Obtinene si es de dia o noche y el tiempo que hace
    const getDayNight = getTime+'-'+props.weather.weather[0].main;

    // Funcion para regresar todos los pronosticos, pasandoles a cada uno su cambio de datetime a hora local CDT
    const forecasts = props.forecast.map(forecast => {
        const forecastSunrise = new Date(((forecast.dt+props.weather.timezone)*1000)+5).toString();
        const forecastTime = forecastSunrise.slice(0,10)  +' - '+ hour(forecastSunrise.slice(16,21)) + ' CDT';
        //Retorno de cada pronostico
        return (
            <ForecastInfo key={forecast.dt_txt} time={forecastTime} forecast={forecast} />
        );
    });

    // Return principal, al div principal se le pasa de parametro si es de dia o de noche, seguido del tiempo actual para mostrarlo dinamico
    return(
        <div className={`weather-display ${getDayNight}`}>
            <h1 className="display-4">{props.weather.name}</h1>
            <h6>{currentDate}</h6>
            <h2 className="text-capitalize">{props.weather.weather[0].description}</h2>
            <h5>Temperature: {celciusDegree}ºC</h5>
            <h6>Min: {celciusDegreeMin}ºC</h6>
            <h6>Max: {celciusDegreeMax}ºC</h6>
            <img alt={props.weather.name} src={props.icon} />
            <h4 className="mt-5">Forecast</h4>
            {/* Aqui estan los pronosticos */}
            <div className="forecasts">
                {forecasts}
            </div>
        </div>
    );
};
export default WeatherInfo;