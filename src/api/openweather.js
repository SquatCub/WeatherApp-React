import axios from 'axios';

// Api componente para axios
export default axios.create({    
    baseURL: 'http://api.openweathermap.org/'
});