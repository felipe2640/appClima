import { render } from "@testing-library/react";
import React, { Component } from "react";
import { getWeatherInfo } from "../API";

export default class WeatherApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = ({target}) => {
        const { name,value} = target;
        this.setState({ [name]: value });

    }

    searchApi = async() => {
        const {city} = this.state;
        const {data} = await getWeatherInfo(city);
        this.setState({ weather: data });
        

    }

    render(){
        const { city, weather } = this.state;
        return(
            <div>
               <input type="text" name="city"className="form-control" onChange={this.handleChangeInput} placeholder="Informe a cidade" value={this.state.city} />
               <button type="button" onClick={this.searchApi} className="btn btn-primary" >Create</button>
               <hr/>
            { weather && weather.current ?
               <div className="weather-info">
                    <h1>{weather.current.weather_descriptions}</h1>
                    <img src={weather.current.weather_icons} alt=""/>
                    <h4>{weather.current.temperature} °C </h4>
               </div>
            : <p> Note that</p>
               }
            </div>

        );
    }
}