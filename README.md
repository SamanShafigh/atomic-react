Review Note: After using this pattern for few months I think the separation of components into atoms/molecules/organisms is not a good idea since you and other developers always facing these question:

### Is this componnet an atom or a molecule?  

Instead I think it is better to define and abstract your UI componnets in a more meanningfull way. In a way that you dont need to ask question or feel guilty about whether you defined your commponent in the right place.

For example in this https://github.com/SamanShafigh/react-fondations project I've grouped my UI elements in a folder called `elements` (which you can organize it using lernajs) in a same way as ant-design did 


# atomic-react

The aim of this document is to cover some best practices and design patterns of implementing a large application using atomic component design principles in React/Redux libraries.
I am developing an app like this

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/app-component.jpg)

## How to run

Just clone it and then run

```
yarn install
yarn start
```

## How to implement the view part

Even Implementing a logic less app that only displays some data could be challenging for big application. One of the practices that is used for implanting a complex react application is to divide components into 2 groups that we call them containers and components

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

https://jaketrent.com/post/smart-dumb-components-react/

https://preact.gitbooks.io/react-book/content/jsx/dumb.html


## First group (containers)

The first group is called containers (it is also called State-full, smart or class based component). If we are not using Redux This containers are the places that we define the state of application and all the functionality that modifies this state. That is why we call them state-full or smart. However if we use Redux this components provide the connection to Redux action dispatchers and states by simply mapping actions and sates to props. Note that when we use Redux even the containers are relatively logicless.


For example in our sample app we have one container component called Dashboard and it is located inside src/containers folder

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s1.jpg)

This is the implementation of this container. You can see we use ES6 class to define it and that is why we call them class-based components.

```javascript
class Dashboard extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
```

A container can also be consist of some other containers for example in our case we have another container called Feeds inside Dashboard container

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s2.jpg)

```javascript
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

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s3.jpg)

```javascript
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

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s4.jpg)


This is the implementation of our Feeds container (Note: the connection to Redux is removed for simplicity)

```javascript
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

```javascript
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

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s5.jpg)


## Atomic Design

We can continue and break our app to smaller dumb, logic less, and state less components. For example each Post can be implemented as a component. Even you can break a Post component to smaller reusable components like Icon, Button and ...

However we can see some of these components are much more smaller and reusable than others. For example a Button or Icon component can be implemented as a share library component and can be used by many single page application project across our company.
We use a concept called Atomic Design to break the components to more reusable smaller components.

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/atomic.png)

http://bradfrost.com/blog/post/atomic-web-design/

https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f

https://arc.js.org/

"We’re not designing pages, we’re designing systems of components.—Stephen Hay"

![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/s6.jpg)

For example you can see for this application we implemented the building blocks of our components as atoms, molecules and organisms. An atom component is the final small and reusable pieces of UI element that can not be divided into smaller part. For example a Button or Icon.

```
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
```

Each atoms encapsulates its dependencies in one place for example styles or test cases.

```
share
  |-atoms
     |--Button
          |--index.js
          |--Button.story.js
          |--Button.test.js
          |--style.js
```

So for example we have the following UI elements

```
Button atom
Icon atom
```


[Profile image molecules]


This is how the implementation of button atom component looks like. Note that in this project I have not used any CSS library. Each component implements its style with java script. We used a library called Glamor https://github.com/threepointone/glamor which allow us to define css in javascript. You can read more about it on the web

```javascript
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
```

A more complex UI element for example in our project is single Post and this is how we implemented it. You can see the function for liking is pass to this component as props and the only thing this component will do is to handle the user click interaction on the Like icon "onClick={() => likePost(post.id)}". You can see this component does not know anything about how the likePost function is implemented or even what exactly it will do.

```javascript
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
```

After we build all of these UI components we can easily use them inside our app or across other projects.


## Story Book

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

https://github.com/storybooks/storybook

In our example app I have created a story for each atomic component. For example the story of a Icon atom or Post organisms is like this

### Icon atom
![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/st1.png)

### Post organisms
![alt text](https://github.com/SamanShafigh/atomic-react/blob/master/doc/st2.png)

### Sample of Button story

```javascript
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

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
```

The story book can be run by `start-storybook -p 9009 -s public` and it looks like this.
or just `yarn storybook`

## Styling

No open-source CSS library is used and I used a library called glamor to do the styling of my UI components in javascript.

https://github.com/threepointone/glamor

```javascript
import { css } from 'glamor'

// make css rules
let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

// add as data attributes
<div {...rule} {...another}>
  zomg
</div>

// or as classes
<div className={`${rule} ${another}`}>
  zomg
</div>

// merge rules for great justice
let mono = css({
  fontFamily: 'monospace'
})

let bolder = css({
  fontWeight: 'bolder'
})

<div {...css(mono, bolder)}>
  bold code!
</div>
```