import React from 'react';
import SearchBar from './SearchBar';
// import Spinner from './Spinner';
import WeatherInfo from './WeatherInfo';
import openweather from '../api/openweather';
import '../styles/WheaterInfo.css';

class App extends React.Component {
    state = {location: '', weather: '', forecast: '', icon: '', lat: '', lon: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
                this.setState({ lon: position.coords.longitude });
            },
            (err) => {
                // console.log(err);
            }
        );
    }
    
    onSearchSubmit = async (location) => {
        const response1 = await openweather.get('/data/2.5/weather', {
             params: {q: location, appid: '6eee4a38fa835c11fec271ba5ca255c6'}
         });
         const response2 = await openweather.get('/data/2.5/forecast', {
            params: {q: location, appid: '6eee4a38fa835c11fec271ba5ca255c6', cnt: 4}
        });
        // console.log(response1.data);
        this.setState({ weather: response1.data, forecast: response2.data.list, icon: `http://openweathermap.org/img/wn/${response1.data.weather[0].icon}@4x.png`});
    }

    renderContent() {
        if(this.state.weather) {
            return (
                <WeatherInfo weather={this.state.weather} forecast={this.state.forecast} icon={this.state.icon}/>
            );
        }
        return (
            <div className="container">
                <h1>Enter a city</h1>
            </div>
        );
    }
    
    render() {
        return(
            <div className="Clear">
                <div className="container text-center ">
                    <br/>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <br/>
                    {this.renderContent()}
                    <br/>
                </div>
                
            </div>
        );
    }
}

export default App;