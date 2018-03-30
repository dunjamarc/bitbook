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




class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<Switch>
					<Route exact path='/login' component={WelcomePage} />
					<Route exact path='/' component={FeedPage} />
					<Route exact path='/people' component={PeoplePage} />
					<Route exact path='/profile' component={ProfilePage} />
					<Route path='/people/:id' component={ProfilePage} />
					<Route path='/feeds/text/:id' component={TextPostPage} />
					<Route path='/feeds/image/:id' component={ImagePostPage} />
					<Route path='/feeds/video/:id' component={VideoPostPage} />
				</Switch>
				<Footer/>
			</React.Fragment>
		);
	}

}

export default App;
