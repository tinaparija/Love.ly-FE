import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Profiles from '../components/profiles';
import Test from '../components/test';
import SignUp from '../components/SignUp';
import Splash from '../components/splash';



export default (
	<Switch>
    <Route exact path='/' component={ Splash }/>
    <Route path='/home' component={ Home }/>
    <Route path='/profiles' component={ Profiles }/>
    <Route path='/test' component={ Test }/>
		<Route path='/signup' component={ SignUp }/>
  </Switch>
)
