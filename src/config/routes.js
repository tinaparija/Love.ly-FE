import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profiles from '../components/profiles';

import Splash from '../components/splash';
import AllUsers from '../components/allusers';
import Home from '../components/home';



export default (
	<Switch>
    <Route exact path='/' component={ Splash }/>
		<Route path='/profiles' component={ AllUsers }/>
		<Route path='/home/:user_id' component={ Home }/>
		{/* all other routes are removed because Home is the main container which is going to render other components
		and send props */}
  </Switch>
)
