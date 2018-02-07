import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Profiles from '../components/profiles';
import Test from '../components/test';
import SignUp from '../components/SignUp';
import Splash from '../components/splash';
import Priority from '../components/priority'



export default (
	<Switch>
    <Route exact path='/' component={ Splash }/>
    <Route path='/home/5a7b46fac22d502881d39185/test' component={ Test }/>
    <Route path='/home/:user_id' component={ Home }/>
    <Route path='/profiles' component={ Profiles }/>
		<Route path='/signup' component={ SignUp }/>
		<Route path='/priority' component={ Priority }/>
  </Switch>
)
