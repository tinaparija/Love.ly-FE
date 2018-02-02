import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Profiles from '../components/profiles';
import Test from '../components/test';

export default (
	<Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/profiles' component={ Profiles }/>
    <Route path='/test' component={ Test }/>
  </Switch>
)
