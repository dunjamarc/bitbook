import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import WelcomePage from './pages/welcomePage/WelcomePage.js';
import FeedPage from './pages/feedPage/FeedPage.js';
import PeoplePage from './pages/peoplePage/PeoplePage.js';
import ProfilePage from './pages/profilePage/ProfilePage.js';
import TextPostPage from './pages/postPage/TextPostPage.js';
import ImagePostPage from './pages/postPage/ImagePostPage.js';
import VideoPostPage from './pages/postPage/VideoPostPage.js';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { requireAuth } from './pages/requireAuth'

class App extends Component {


	render() {

		return (
			<React.Fragment>
				<div id="wrapper">
					<Header />
					<Switch>
						<Route exact path='/' component={requireAuth(FeedPage)} />
						<Route exact path='/feed' component={requireAuth(FeedPage)} />
						<Route exact path='/people' component={requireAuth(PeoplePage)} />
						<Route exact path='/profile' component={requireAuth(ProfilePage)} />
						<Route path='/people/:id' component={requireAuth(ProfilePage)} />
						<Route path='/feeds/text/:id' component={requireAuth(TextPostPage)} />
						<Route path='/feeds/image/:id' component={requireAuth(ImagePostPage)} />
						<Route path='/feeds/video/:id' component={requireAuth(VideoPostPage)} />
						<Route exact path='/login' component={WelcomePage} />
					</Switch>
					<div id="push"></div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}

}

export default App;
