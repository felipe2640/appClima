import { render } from "@testing-library/react";
import React, { Component } from "react";
import { getWeatherInfo } from "../API";
//import Toast from "../components/Toast";

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
            <div class="bd-content ps-lg-4">
                <div class="card">
                         <div class="card-body">
                            <h1 className="text-center">APP CLIMA</h1>
                         </div>
                </div>
                
                <div className="container px-4" >
                    <input type="text" name="city"className="form-control" onChange={this.handleChangeInput} placeholder="Informe a cidade" value={this.state.city} />
                    <div class="bd-content ps-lg-4">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" onClick={this.searchApi} className="btn btn-primary me-md-2" >Create</button>
                    </div>
                    </div>
                </div>
                    <hr/>
                <div className="container fluid" >
                    {/* <Toast message='Toast componente'/> */}
                    { weather && weather.current ?
                    <div className="weather-info">
                        <div class="card text-center">
                                <div class="card-body">
                                   <img src={weather.current.weather_icons} class="card-img-top" alt=""/>
                                </div>
                            
                                <div className="card-body">
                                    <h4 className="text-center" >{weather.current.weather_descriptions}</h4>
                                    <h5 className="text-center" >{weather.current.temperature} °C </h5>
                                </div>
                            
                        </div>
                    </div>
                    : <p className="text-center"> Note that</p>
                     }
                </div>
            </div>

        );
    }
}