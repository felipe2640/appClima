import axios from 'axios';

const getTodos = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')

}

const getWeatherInfo = async(q) => {
    return await axios.get(`http://api.weatherstack.com/current?access_key=0d5ba897f768b2b3982de5e1dcf89635&query=${q}`)
}
export {getTodos,getWeatherInfo}