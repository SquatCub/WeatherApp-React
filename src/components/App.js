import React from 'react';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import WeatherInfo from './WeatherInfo';
import openweather from '../api/openweather';
import '../styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: '', weather: '', forecast: '', icon: '', lat: '', lon: '', message: '', error: ''};
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
                this.setState({ lon: position.coords.longitude });
                this.getCurrent(this.state.lat, this.state.lon);
            },
            (err) => {
                this.setState({message: "No current position available, please enter a city"})
            }
        );
    }
     getCurrent = async(lat, lon) => {
        if(this.state.lat) {
            const response1 = await openweather.get('/data/2.5/weather', {
                params: {lat: lat, lon: lon, appid: '6eee4a38fa835c11fec271ba5ca255c6'}
            });
            const response2 = await openweather.get('/data/2.5/forecast', {
                params: {lat: lat, lon: lon, appid: '6eee4a38fa835c11fec271ba5ca255c6', cnt: 4}
            });
             this.setState({ weather: response1.data, forecast: response2.data.list, icon: `http://openweathermap.org/img/wn/${response1.data.weather[0].icon}@4x.png`});
        }
    }
    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    onSearchSubmit = async (location) => {
        try{
            const response1 = await openweather.get('/data/2.5/weather', {
                params: {q: location, appid: '6eee4a38fa835c11fec271ba5ca255c6'}
            });
             const response2 = await openweather.get('/data/2.5/forecast', {
                 params: {q: location, appid: '6eee4a38fa835c11fec271ba5ca255c6', cnt: 4}
             });
            this.setState({ weather: response1.data, forecast: response2.data.list, icon: `http://openweathermap.org/img/wn/${response1.data.weather[0].icon}@4x.png`, error: ''});

        } catch(error) {
            if (error.response) {
                this.setState({error: `${this.Capitalize(error.response.data.message)}. Please search another city`});
            }
        }
    }

    renderContent() {
        if(this.state.weather && !this.state.lat) {
            return (
                <WeatherInfo weather={this.state.weather} forecast={this.state.forecast} icon={this.state.icon}/>
            );
        } else if(this.state.lat && this.state.lon) {
            if(this.state.weather){
                return (
                    <div>
                        <WeatherInfo weather={this.state.weather} forecast={this.state.forecast} icon={this.state.icon}/>
                    </div>
                );
            }
        } else if(this.state.message) {
            return (
                <div>
                    <h2>{this.state.message}</h2>
                </div>
            );
        }
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }
    
    render() {
        return(
            <div className="contain">
                <div className="container text-center ">
                    <h1 className="display-4">MyWeather</h1>
                    <br/>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <br/>
                    {this.state.error}
                    {this.renderContent()}
                    <br/>
                </div>
            </div>
        );
    }
}

export default App;