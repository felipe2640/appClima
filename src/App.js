import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import WeatherApp from './components/WeatherApp';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Forgot from './components/Forgot';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login" render={props => <Login {...props}/>}/> 
        <Route exact path="/Forgot" name="Forgot" render={props => <Forgot {...props}/>}/>
        <Route exact path="/Register" name="Register" render={props => <Register {...props}/>}/>
        <Route exact path="/WeatherApp" name="WeatherApp" render={props => <WeatherApp {...props}/>}/>
        
        {/* <Route path="/" name="Home" render={props => <AppLayout {...props}/>}/>  */}
        <Route path="*" name="NotFound" render={props => <NotFound {...props}/>}/>
      </Switch>
    </Router>
  );
}