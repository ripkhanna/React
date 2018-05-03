import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage';
import Roster from './routes';
import Schedule from './AboutPage';


class HomePage extends React.Component
{
    render() 
    {
        return (
			<main>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/routes" component={Roster}/>
				<Route path="/about" component={Schedule}/>
			</Switch>
		</main>
		);
	}
}

export default HomePage;