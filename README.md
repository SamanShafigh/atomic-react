# atomic-react

The aim of this document is to cover some best practices and design patterns of implementing a large application using atomic component design principles in React/Redux libraries.

## How to run

Just clone it and then run
yarn install
yarn start

## How to implement the view part

Even Implementing a logic less app that only displays some data could be challenging for big application. One of the practices that is used for implanting a complex react application is to divide components into 2 groups that we call them containers and components

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

https://jaketrent.com/post/smart-dumb-components-react/

https://preact.gitbooks.io/react-book/content/jsx/dumb.html


## First group (containers)

The first group is called containers (it is also called State-full, smart or class based component). If we are not using Redux This containers are the places that we define the state of application and all the functionality that modifies this state. That is why we call them state-full or smart. However if we use Redux this components provide the connection to Redux action dispatchers and states by simply mapping actions and sates to props. Note that when we use Redux even the containers are relatively logicless.


For example in our sample app we have one container component called Dashboard and it is located inside src/containers folder
This is the implementation of this container. You can see we use ES6 class to define it and that is why we call them class-based components.

```
class Dashboard extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
```

A container can also be consist of some other containers for example in our case we have another container called Feeds inside Dashboard container

```
class Dashboard extends React.Component {
  render() {
    return (
      <div>
          <Feeds />
      </div>
    );
  }
}
```

## Second group (components)

The second group is called components (it is also called State-less, dumb or function based component). The only one concern of these components is to how represent the UI and call an action when user interact with them. They don't know anything about the logic of application. They don't implement any API call or any logic. All the functionality that needed for user interactions (for example liking a post) and all data that need to be display (for example post data) are pass to these components as props.

For example in our app the Dashboard container is also consist of 2 dumb components. One is Header and one is NewsWidget

```
class Dashboard extends React.Component {
  render() {
    return (
      <div>
          <Header user={this.props.profile}/>
          <NewsWidget news={this.props.news} />
          <Feeds />
      </div>
    );
  }
}
```

The Feeds container is also consist of 2 dumb components. One is Posts and one is WritePost
This is the implementation of our Feeds container (Note: the connection to Redux is removed for simplicity)

```
class Feeds extends React.Component {
  render() {
    return (
      <div>
        <WritePost
          user={this.props.profile}
          addPost={this.props.addPost}
        />
        <Posts
          posts={this.props.posts}
          likePost={this.props.likePost}
        />
      </div>
    );
  }
}
```

And this is the implementation of our dumb or function based component. You can see we are not using ES6 class to define the component. The necessarily data (posts) and the functionality (likePost) is pass to this component as a prop.

```
const Posts = ({ posts, likePost }) => (
  <Panel title="Today feeds" icon="ic_question_answer">
    {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          likePost={likePost}
        />
      ))}
  </Panel>
);
```

## Atomic Design

We can continue and break our app to smaller dumb, logic less, and state less components. For example each Post can be implemented as a component. Even you can break a Post component to smaller reusable components like Icon, Button and ...

However we can see some of these components are much more smaller and reusable than others. For example a Button or Icon component can be implemented as a share library component and can be used by many single page application project across our company.

Note

Atlassian team also doing this approach by having ~15 developers to just implement and manage all UI reusable components for their platform


We use a concept called Atomic Design to break the components to more reusable smaller components.

http://bradfrost.com/blog/post/atomic-web-design/

https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f

https://arc.js.org/

"We’re not designing pages, we’re designing systems of components.—Stephen Hay"


For example you can see for this application we implemented the building blocks of our components as atoms, molecules and organisms. An atom component is the final small and reusable pieces of UI element that can not be divided into smaller part. For example a Button or Icon.
share
  |-atoms
  |  |--Button
  |  |--Cell
  |  |--Checkbox
  |  |--Divider
  |  |--Grid
  |  |--Icon
  |  |--Input
  |  |--Loading
  |  |--Textarea
  |
  |-molecules
  |  |--Connection
  |  |--Modal
  |  |--Panel
  |  |--ProfileImage
  |  |--ProfileInfo
  |  |--Table
  |  |--User
  |
  |--organisms
     |--Experience
     |--News
     |--Post
     |--PostComment
     |--ProfileInfo
     |--Recommendation

Each atoms encapsulates its dependencies in one place for example styles or test cases.
share
  |-atoms
     |--Button
          |--index.js
          |--Button.story.js
          |--Button.test.js
          |--style.js

So for example we have the following UI elements

Button atom



Icon atom





Profile image molecules

This is how the implementation of button atom component looks like. Note that in this project I have not used any CSS library. Each component implements its style with java script. We used a library called Glamor https://github.com/threepointone/glamor which allow us to define css in javascript. You can read more about it on the web
const Button = ({
  onClick,
  children,
  type,
  size,
  disabled = false,
}) => (
  <button type={type} onClick={onClick} className={getStyle(size, disabled)}>
    {children}
  </button>
);

A more complex UI element for example in our project is single Post and this is how we implemented it. You can see the function for liking is pass to this component as props and the only thing this component will do is to handle the user click interaction on the Like icon "onClick={() => likePost(post.id)}". You can see this component does not know anything about how the likePost function is implemented or even what exactly it will do.
import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileInfo from '../../molecules/ProfileInfo';
import Icon from '../../atoms/Icon';

const Post = ({ post, likePost, dislikePost }) => (
  <div>
    <Grid>
      <Cell>
        <ProfileInfo
          name={post.user.name}
          img={post.user.img}
          email={post.user.email}
        />
      </Cell>
    </Grid>
    <Grid>
      <Cell>{post.summary}</Cell>
    </Grid>
    <Grid>
      <Cell>{post.likes} Likes</Cell>
      <Cell>{post.dislike} Dislike</Cell>
    </Grid>
    <Grid>
      <Cell>
        <a onClick={() => likePost(post.id)}>
          <Icon name="ic_thumb_up">Like</Icon>
        </a>
        <a onClick={() => dislikePost(post.id)}>
          <Icon name="ic_thumb_down">Dislike</Icon>
        </a>
      </Cell>
    </Grid>
  </div>
);

After we build all of these UI components we can easily use them inside our app or across other projects.
4.1.7 Story Book

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

https://github.com/storybooks/storybook

In our example app I have created a story for each atomic component. For example the story of a Button element could be like this
const story = storiesOf('Button', module);

story.add('sizes', () => (
  <div>
      <Button onClick={() => {}}>
        Default
      </Button>

      <Button type="primary" size="small" onClick={() => {}}>
        Small
      </Button>

      <Button type="primary" size="large" onClick={() => {}}>
        Large
      </Button>
  </div>
));

story.add('active/disable', () => (
  <div>
      <Button type="primary" onClick={() => {}}>
        Active Button
      </Button>

      <Button type="primary" disabled onClick={() => {}}>
        Disable Button
      </Button>
  </div>
));

The story book can be run by `start-storybook -p 9009 -s public` and it looks like this.

4.1.8 How to implement the sate part

We use Redux to manage the state of our application. You can find a lot about Redux on the web. However in this document we briefly walk thorough the implementation of Redux in our application.

The building blocks of a Redux are

    Actions
    Reducers
    Store

Actions: are simple object with type and payloads of information that send data from your application to your store. So your components call action creators which dispatch an action.
{
    type: "DO_SOMETHING",
    data,
}

You can create this action object that we call it action creator
export function dislikePost(postId) {
    return {
            type: "DO_SOMETHING",
            data,
        }
}

Reducers: Actions describe the fact that something has happened but don't specify how the application's state changes in response. This is the job of reducers.

Reducer is like a function that accept current state and an action and reruns a new state. new state = reduce(current state, action)
function posts(state = [], action) {
  switch(action.type) {
    case "DO_SOMETHING":
      return action.data;
    default:
      return state;
  }
}


Store: is the object that brings Actions and Reducers together. The store has the following responsibilities:

    Holds application state;
    Allows access to state via getState();
    Allows state to be updated via dispatch(action);
    Registers listeners via subscribe(listener);


Let see all of these in our app:
redux
  |-actions
  |  |-comments.js
  |  |-network.js
  |  |-news.js
  |  |-posts.js
  |  |-profile.js
  |  |-user.js
  |
  |-reducers
  |  |-index.js
  |  |-comments.js
  |  |-network.js
  |  |-news.js
  |  |-posts.js
  |  |-profile.js
  |  |-status.js
  |  |-user.js
  |
  |-store
    |-index.js
    |-state.js

The first thing is to define the state of application (state.js). The design of this object is very important and you will find lots of questions and design decisions.  I suggest to do a proper study on the best practices of how to define your app state.
// create an object for the default data
const state = {
  profile,
  posts: []
};

Then you need to set up your store file. You have only one story in your app. Multiple thing is happening here but in summary it will create a store based on reducers and initial state of your app. In this store also we used a middle-ware called redux-thunk that allow us to return callbacks in action creators and we use it for doing asynchronous api calls. https://github.com/gaearon/redux-thunk

The must things you need to do is to install Redux DevTools tools for chrome.  We then need to set it inside our store "const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;"

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// Redux Thunk middleware allows you to write action creators that return a function instead of an action
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';
// import initial state of the app
import state from './state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Compose a store creator with some middlewares
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);

// Create a store
const store = createStoreWithMiddleware(rootReducer, state);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

Redux DevTools is for debugging application's state changes. The extension provides power-ups for your Redux development workflow. Apart from Redux, it can be used with any other architectures which handle the state.

Now we can define some actions and action creators for post. We explain the dislikePost action creator here
import Actions from '../../lib/constants/Actions';
import { asyncDislikePost } from '../../apis/PostApi';

// Try to dislike a post
export function dislikePost(postId) {
    return (dispatch) => {
        dispatch({
            type: Actions.POST_DISLIKE_POST,
            postId,
        });

        asyncDislikePost(postId, (err, data) => {
            if (err) {
                return dispatch(postDislikedFailed(postId));
            }
            dispatch(postDisliked(postId));
        });
    }
}

// Post get disliked
export function postDisliked(postId) {
    return {
        type: Actions.POST_POST_DISLIKED,
        postId,
    }
}

// Post dislike get failed
export function postDislikedFailed(postId) {
    return {
        type: Actions.POST_POST_DISLIKED_FAILED,
        postId,
    }
}

Because we used redux-thunk we can return a callback for example in dislikePost. So what is happening here is as follow:

1) We connect to the Redux in our container Feeds component and map the dislikePost action creator function to a props.

2) Then we pass this dislikePost function as a props to internal component Post

3) When user click on dislike link this function will be call. As the result a callback function will be dispatch to redux middle-ware.

4) Redux middle will call and run our callback with dispatch parameter.
(dispatch) => {
    dispatch({
        type: Actions.POST_DISLIKE_POST,
        postId,
    });

    asyncDislikePost(postId, (err, data) => {
        if (err) {
            return dispatch(postDislikedFailed(postId));
        }
        dispatch(postDisliked(postId));
    });
}

5) Inside our callback function we first dispatch a action called Actions.POST_DISLIKE_POST this will cause a change in the state of application and a post will get dislike. Note that still we did not send any request to backed so as the result user will have a better experience

6) Then we will call an api async operation that will send a dislike request to server. Inside its callback when we get the result of operation we dispatch another 2 actions. If we have an error we will dispatch Actions.POST_POST_DISLIKED_FAILED action. This action will cause the sate of app to change again and for example showing a error message and changing back the disliked count.

Clearly we can see actions and action creators does not concern anything about who, how the sate of app will change.


Finally we define our reducers.


function posts(state = [], action) {
  switch(action.type) {
        /**
         * Try to disLiking a post
         */
        case Actions.POST_DISLIKE_POST:
            return state.reduce((posts, post) => {
                if (post.id === action.postId) {
                    post.dislike++;
                }
                posts.push(post);
                return posts;
            }, []);

        /**
         * Post get disliked successfully
         */
        case Actions.POST_POST_DISLIKED:
            return state;

        /**
         * DisLiking a post was failed
         */
        case Actions.POST_POST_DISLIKED_FAILED:
            return state.reduce((posts, post) => {
                if (post.id === action.postId) {
                    post.dislike--;
                }
                posts.push(post);
                return posts;
            }, []);

    default:
      return state;
  }
}

export default posts;

When action is dispatched Redux will pass it to all reducers and whoever concern about that action will change the state that it is controlling. So let see what is happening when we dispatch  POST_DISLIKE_POST

1) An action creator will dispatch POST_DISLIKE_POST action with some payload which in this case is post ID

2) This action is pass to all reducers but we only concern about this action inside posts reducer. It is so OK to have different reducer listening to the same action and change the state of some other part of application. This is sooo powerful to break and decouple the logic of application

3) The posts(state = [], action) reducer will accept the current state of app which is the list of all exiting pots and an action

4) Reducer will return a new state. Note: never modify the current state. Reducers should be pure functions. They don't perform any side effect or API call operation.
4.1.9 How to connect the 2 parts
import React from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts,
  addPost,
  likePost,
  dislikePost,
} from '../redux/actions/posts'

import Posts from '../components/Post/Posts';
import WritePost from '../components/Post/WritePost';

class Feeds extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <WritePost
          user={this.props.profile}
          addPost={this.props.addPost}
        />
        <Posts
          isLoading={this.props.status.loading}
          posts={this.props.posts}
          likePost={this.props.likePost}
          dislikePost={this.props.dislikePost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  profile: state.profile,
});

const mapDispatchToProps = {
  fetchPosts,
  addPost,
  likePost,
    dislikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
