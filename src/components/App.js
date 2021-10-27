import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import WeatherApp from './WeatherApp';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
// import Forgot from './Forgot';
import { AuthProvider } from '../contexts/Auth'
import { PrivateRoute } from './PrivateRoute'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/Login" name="Login" component={Login}/> 
          {/* <Route exact path="/Forgot" name="Forgot" render={props => <Forgot {...props}/>}/> */}
          <Route exact path="/Register" name="Register" component={Register}/>
          <PrivateRoute exact path="/" name="WeatherApp" component={WeatherApp}/>
          <Route path="*" name="NotFound" component={NotFound}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}