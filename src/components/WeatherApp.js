import React, { useState,useRef } from "react";
import { getWeatherInfo } from "../API";
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/Auth'
import useClass from './../hooks/add-class-body';


//import Toast from "../components/Toast";

const WeatherApp = (props) => {
    useClass('bg-green');
    const cityRef = useRef()
    const [data, weather] = useState(null)

    async function searchApi(e) {
        e.preventDefault()
        const city = cityRef.current.value
        const {data} = await getWeatherInfo(city)
        if (data) return weather(data)
    }

    const { signOut } = useAuth()
    const history = useHistory()
    async function handleSignOut() {
        await signOut()

    history.push('/login')
    }


        return(
        
            <div class="bd-content ps-lg-4">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" onClick={handleSignOut} className="btn btn-danger me-md-2">Sign out</button>
                </div>
                <div className="mt-5 flex-row align-items-center ">
                    <form className="card text-dark bg-light  m-4 p-3">
                        <div class="card">
                                <div class="card-body">
                                    <h1 className="text-center">APP CLIMA</h1>
                                </div>
                                
                        </div>
                        
                        <div className="container px-4" >
                            <input type="text" name="city"className="form-control mb-3 mt-3" placeholder="Informe a cidade" ref={cityRef} />
                            <div class="bd-content ps-lg-4">
                            <form className="container px-4 mb-3 md-5" onSubmit={searchApi}>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" onClick={searchApi} className="btn btn-primary me-md-2 mb-3 mt-3" >Create</button>                            
                                    
                                </div>
                                
                            </form>
                            </div>
                        </div>
                            <hr/>
                    </form>
                </div>
                {data ? 
                <div className="container fluid" >
                    <div className="weather-info">
                        <div class="card text-center">
                                <div class="card-body">
                                   <img src={data && (data.current.weather_icons)} class="img-fluid img-thumbnaill" alt=""/> 
                                </div>                            
                                <div className="card-body">
                                    <h4 className="text-center" >{data && (data.current.weather_descriptions)}</h4>
                                    <h5 className="text-center" >{data && (data.current.temperature) } </h5>
                                </div>
                            
                        </div>
                    </div>
                </div>
                : <div></div>}
            </div>
        
        );
    }


export default WeatherApp;