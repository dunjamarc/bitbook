import React, { Component } from 'react';
import './App.css';
import FeedPage from './pages/feedPage/FeedPage';

// import { Switch, Route } from "react-router-dom";
// import WelcomePage from "";


class App extends Component {
	render() {
		return (
			<React.Fragment>

				<FeedPage/>

				{/* <Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route exact path='/feeds' component={FeedPage} />
					<Route exact path='/people' component={PeoplePage} />
					<Route exact path='/profile' component={ProfilePage} />
					<Route path='/feeds/:id' component={PostPage} />
				</Switch> */}
			</React.Fragment>
		);
	}

}

export default App;
