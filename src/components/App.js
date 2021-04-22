import React from 'react';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import WeatherInfo from './WeatherInfo';
import Message from './Message';
import openweather from '../api/openweather';
import '../styles/App.css';
import search from '../images/search.png';

// Componente App
class App extends React.Component {
    // States
    state = {location: '', weather: '', forecast: '', icon: '', lat: '', lon: '', message: '', error: '', time: ''};

    // Primera vez del componente
    componentDidMount() {
        // Tratar de obtener geolocalizacion (Probado en Chrome, se requiere protocolo HTTPS para otros navegadores)
        window.navigator.geolocation.getCurrentPosition(
            // Obtencion de la geolocalizacion
            (position) => {
                this.setState({ lat: position.coords.latitude });
                this.setState({ lon: position.coords.longitude });
                // Se llama a la funcion para obtener la localizacion en base a latitud y longitud, se deja vacio el parametro de la ciudad
                this.getCurrent('');
            },
            //  Si no se otorgan los permisos, se guarda el mensaje
            (err) => {
                this.setState({message: "No current position available, please enter a city"})
            }
        );
    }

    // Funcion para la obtencion de posicion actual en base a latitud y longitud (en caso de tener los permisos)
     getCurrent = async(city) => {
        // Lets para guardar las respuestas en base a lo que se requiera
        let response1, response2;
        try {
            // Al cargar si hay permisos o si no hay nada en el campo de texto, trata de obtener la posicion actual y guardarla
            if(!city){
                //Obtencion del clima actual en base a parametros (lat, lon)
                response1 = await openweather.get('/data/2.5/weather', {
                    params: {lat:this.state.lat, lon:this.state.lon, appid: '6eee4a38fa835c11fec271ba5ca255c6'}
                });
                //Obtencion del pronostico, en base a lat y lon con parametro cnt a 8 horas
                response2 = await openweather.get('/data/2.5/forecast', {
                    params: {lat:this.state.lat, lon:this.state.lon, appid: '6eee4a38fa835c11fec271ba5ca255c6', cnt: 8}
                });
            // Si hay ciudad, trata de obtener sus datos
            } else {
                //Obtencion del clima actual en base a la ciudad
                response1 = await openweather.get('/data/2.5/weather', {
                    params: {q: city, appid: '6eee4a38fa835c11fec271ba5ca255c6'}
                });
                //Obtencion del pronostico, en base a ciudad con parametro cnt a 8 horas
                response2 = await openweather.get('/data/2.5/forecast', {
                        params: {q: city, appid: '6eee4a38fa835c11fec271ba5ca255c6', cnt: 8}
                });
            }
             //Se guandan los states dependiendo si existen datos de la posicion actual o si se ingreso una ciudad en el buscador
            this.setState({ weather: response1.data, forecast: response2.data.list, icon: `http://openweathermap.org/img/wn/${response1.data.weather[0].icon}@4x.png`, error: '', time: response1.data.weather[0].icon.slice(2,3)});
        //Si hay algun tipo de error se guarda en el state para mostrarlo al usuario
        } catch(error) {
            if (error.response) {
                this.setState({error: `${error.response.data.message}. Please search another city`});
            }
        }
    }

    // Funcion para determinar que sera mostrado al usuario
    renderContent() {
        // Si hay datos de el clima, ya sean del usuario o de una ciudad ingresada
        if(this.state.weather) {
            return (
                <WeatherInfo weather={this.state.weather} forecast={this.state.forecast} icon={this.state.icon} time={this.state.time} />
            )
        // Si hay algun mensaje (No es lo mismo que el error)
        } else if(this.state.message) {
            return (
                <Message message={this.state.message} image={search}/>
            );
        }
        // Si no se cumple ninguna condicion, mostrar un spinner
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }

    // Render principal
    render() {
        return(
            <div className="container text-center">
                <h1 className="display-4">MyWeather</h1>
                <br/>
                {/* Barra de busqueda, manda llamar getCurrent en caso de submit */}
                <SearchBar onSubmit={this.getCurrent}/>
                <br/>
                {/* Mensaje de error */}
                <Message message={this.state.error}/>
                {/* Funcion que determina que se renderizara */}
                {this.renderContent()}
                <br/>
            </div>
        );
    }
}

export default App;