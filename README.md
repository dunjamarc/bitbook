File structure:


src/
	App.js
	App.css
	index.js
	index.css
	app/
		pages/

			welcomePage/
				WelcomePage.js
				LoginForm.js
				RegisterForm.js
			feedPage/
				FeedPage.js
				ModalNewPost/
					ModalNewText.js
					ModalNewImage.js
					ModalNewVideo.js
				FeedListItem/
					FeedListImage.js
					FeedListPost.js
					FeedListVideo.js
				Filter.js              ---
			postPage/
				TextPostPage.js
				ImagePostPage.js
				VideoPostPage.js
				CommentsListItem.js
			peoplePage/
				PeoplePage.js
				Search.js              ---
				PeopleListItem.js
			profilePage/
				ProfilePage.js
				ModalUpdateProfile.js

		partials/
			Header.js
			Footer.js

	entities/
		user.js
		post.js
		comment.js

	services/
		postService.js
		userService.js
		commentService.js
		
	shared/





