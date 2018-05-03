import React from "react";
import { Switch, Route } from 'react-router-dom';

import App from './App'; 
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const Routes = () => (

 <Switch>
 <Route path="/" component={App}/>
 <Route path="homePage" component={HomePage}/>
 <Route path="aboutPage" component={AboutPage} />
</Switch>

);

//<NotFoundRoute handler={require('./components/notFoundPage')} />
//<Redirect from="about-us" to="about" />
//<Redirect from="about/*" to="about" />

export default Routes;