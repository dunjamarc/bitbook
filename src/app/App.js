import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";
import WelcomePage from './pages/welcomePage/WelcomePage.js';
import FeedPage from './pages/feedPage/FeedPage.js';
import PeoplePage from './pages/peoplePage/PeoplePage.js';
import ProfilePage from './pages/profilePage/ProfilePage.js';
import PostPage from './pages/postPage/PostPage.js';


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
