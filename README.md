# Readable Project

This is my version of Readable project for Udacity's React Nanodegree course. The purpose of this project is to demonstrate understanding on React & Redux and to complete 2nd assignment project for React Nanodegree course

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## :zap: Quickstart

To get started developing right away:

1.  Clone this repo using "clone" or download ZIP directly from Github and extract
2.  `cd` into project root folder
3.  Follow the instructions given below in "API Server" and "Client" section respectively.
4.  Once done with the steps, you should be able to see app running in your default browser.

### API Server:

* Install and start the API server (running on http://localhost:3001)
  * `cd api-server`
  * `npm install` or `yarn install`
  * `npm start` or `yarn start`
    Information about the API server and how to use it can be found in its [README file](api-server/README.md).

### Client:

* Install and start the client App (Client App is scaffold using create-react-app)

  * `cd readable-client`
  * `npm install` or `yarn install`
  * `npm start` or `yarn start`

  Information about the Client App and how to use it can be found in its [README file](readable-client/README.md).

If everything goes well, you should see an app running on a new browser window, however, in any case if it doesn't start automatically, you can navigate app using 'http://localhost:3000' in your favorite browser.

All the best!

### Project Structure:

```
└── readable
    ├── api-server
    │   ├── categories.js
    │   ├── comments.js
    │   ├── config.js
    │   ├── package.json
    │   ├── posts.js
    │   ├── README.md
    │   └── server.js
    ├── readable-client
    │   ├── package.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   ├── README.md
    │   ├── src
    │   │   ├── actions
    │   │   │   ├── async
    │   │   │   │   ├── categoriesAsyncActions.js
    │   │   │   │   ├── commentsAsyncActions.js
    │   │   │   │   ├── generalAsyncActions.js
    │   │   │   │   └── postsAsyncActions.js
    │   │   │   ├── categoriesActions.js
    │   │   │   ├── commentsActions.js
    │   │   │   ├── postsActions.js
    │   │   │   ├── uiActions.js
    │   │   │   └── voteActions.js
    │   │   ├── components
    │   │   │   ├── App.js
    │   │   │   ├── AppRoutes.js
    │   │   │   ├── category
    │   │   │   │   └── CategoryList.js
    │   │   │   ├── comment
    │   │   │   │   ├── CommentActions.js
    │   │   │   │   ├── CommentDetail.js
    │   │   │   │   ├── CommentForm.js
    │   │   │   │   ├── Comment.js
    │   │   │   │   ├── CommentsList.js
    │   │   │   │   ├── EditComment.js
    │   │   │   │   └── PostCommentsList.js
    │   │   │   ├── containers
    │   │   │   │   ├── PostCommentsContainer.js
    │   │   │   │   ├── PostDetailContainer.js
    │   │   │   │   ├── PostFormContainer.js
    │   │   │   │   ├── PostsListContainer.js
    │   │   │   │   ├── VoteCardContainer.js
    │   │   │   │   └── withLoader.js
    │   │   │   ├── post
    │   │   │   │   ├── AddPostButton.js
    │   │   │   │   ├── CommentCounter.js
    │   │   │   │   ├── PostCardActions.js
    │   │   │   │   ├── PostCardCategory.js
    │   │   │   │   ├── PostCard.js
    │   │   │   │   ├── PostCardTitle.js
    │   │   │   │   ├── PostContent.js
    │   │   │   │   ├── PostDetail.js
    │   │   │   │   ├── PostForm.js
    │   │   │   │   ├── Post.js
    │   │   │   │   ├── PostsList.js
    │   │   │   │   └── PostsOrderMenu.js
    │   │   │   └── ui
    │   │   │       ├── ColoredButton.js
    │   │   │       ├── Drawer.js
    │   │   │       ├── Footer.js
    │   │   │       ├── FormActionBar.js
    │   │   │       ├── Header.js
    │   │   │       ├── IconButton.js
    │   │   │       ├── LinkButton.js
    │   │   │       ├── Loader.js
    │   │   │       ├── NavBar.js
    │   │   │       ├── NavBarLink.js
    │   │   │       ├── NotificationToast.js
    │   │   │       ├── PathNotFound.js
    │   │   │       ├── SectionHeader.js
    │   │   │       ├── SelectWithOptions.js
    │   │   │       ├── TextArea.js
    │   │   │       ├── TextField.js
    │   │   │       └── VoteCard.js
    │   │   ├── constants
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   ├── reducers
    │   │   │   ├── categories.js
    │   │   │   ├── comments.js
    │   │   │   ├── index.js
    │   │   │   ├── posts.js
    │   │   │   ├── ui.js
    │   │   │   └── vote.js
    │   │   ├── registerServiceWorker.js
    │   │   ├── services
    │   │   │   ├── commentsApi.js
    │   │   │   ├── generalApi.js
    │   │   │   ├── httpService.js
    │   │   │   ├── notificationMiddleware.js
    │   │   │   └── postsApi.js
    │   │   ├── store
    │   │   │   └── configureStore.js
    │   │   ├── styles
    │   │   │   ├── App.css
    │   │   │   ├── index.css
    │   │   │   └── loader.css
    │   │   └── utils
    │   │       ├── index.js
    │   │       └── propTypesDefs.js
    │   └── yarn.lock
    └── README.md
```

### Contributors:

1.  API Server
    Udacity - React Nanodegree Team
2.  Client
    Bhavik Patel (@bhavikcpatel) - I would love to see your comments and suggestions on my twitter handle. Thanks in advance.

### License

MIT
