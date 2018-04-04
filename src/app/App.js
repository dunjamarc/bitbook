import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
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
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	handleLogin = () => {

		this.setState({
			isLoggedIn: true
		})
	}


	render() {
		return (
			<React.Fragment>
				<div id="wrapper">
					<Header />
					{this.state.isLoggedIn ?
						<Switch>
							<Route exact path='/feed' component={FeedPage} />
							<Redirect exact from='/' to='/feed' />
							<Redirect exact from='/login' to='/feed' />
							<Route exact path='/people' component={PeoplePage} />
							<Route exact path='/profile' component={ProfilePage} />
							<Route path='/people/:id' component={ProfilePage} />
							<Route path='/feeds/text/:id' component={TextPostPage} />
							<Route path='/feeds/image/:id' component={ImagePostPage} />
							<Route path='/feeds/video/:id' component={VideoPostPage} />
						</Switch> :
						<Switch>
							<Route exact path='/login' render={() => <WelcomePage handleLogin={this.handleLogin} />} />
							<Redirect exact from='/' to='/login' />
						</Switch>}
					<div id="push"></div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}

}

export default App;
