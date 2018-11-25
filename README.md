# Bitbook
> Simple social network web app written in React as the final BIT course project.

After signing up and setting their profile with basic info, a user can create text, image or video posts, and leave comments.

Demo: [Bitbook](https://dunjamarc.github.io/bitbook)

## Installation

```sh
npm install
npm start
```

## Project structure

* app - Components
	* App.js
	* App.css
	* pages/
		* welcomePage
			* WelcomePage.js
			* LoginForm.js           
			* RegisterForm.js
		* feedPage
			* FeedPage.js
			* ModalNewPost/
			* FeedListItem/
				* FeedListImage.js
				* FeedListPost.js
				* FeedListVideo.js
			* Filter.js              
		* postPage
			* TextPostPage.js
			* ImagePostPage.js
			* VideoPostPage.js
			* CommentsListItem.js    
		* peoplePage
			* PeoplePage.js
			* PeopleListItem.js      
		* profilePage
			* ProfilePage.js         
			* ModalUpdateProfile.js  
		* requireAuth.js
	* partials
		* Header.js                  
		* Footer.js
* entities - ES6 classes
	* User.js
	* UserDetail.js
	* Post.js
	* TextPost.js
	* ImagePost.js
	* VideoPost.js
* services - Services related to main entities
	* postService.js
	* userService.js
	* commentService.js
	* authenticationService.js
