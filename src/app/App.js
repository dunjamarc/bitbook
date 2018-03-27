import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import WelcomePage from "";


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route exact path='/feeds' component={FeedPage} />
					<Route exact path='/people' component={PeoplePage} />
					<Route exact path='/profile' component={ProfilePage} />
					<Route path='/feeds/:id' component={PostPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
