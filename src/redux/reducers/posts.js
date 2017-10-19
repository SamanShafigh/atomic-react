import Actions from '../../lib/constants/Actions';

function posts(state = [], action) {
  console.log(action.type);

  switch(action.type) {
    /**
     * Add a post that user want to post it
     */
    case Actions.POST_ADD_POST:
      const post = {
        id: action.id,
        summary: action.summary,
        img: "",
        likes: 0,
        dislike: 0,
        isPosting: true,
        user: {
          id: action.user.id,
          name: action.user.name,
          email: action.user.email,
          img: action.user.img
        }
      };

      return [post, ...state];

    /**
     * If post was successful then set it to posted
     */
    case Actions.POST_POST_ADDED:
      return state.map((post) => {
        if (post.id === action.tempId) {
          post.isPosting = false;
        }
        return post;
      });

    /**
     * Liking a post
     */
    case Actions.POST_LIKE_POST:

      return state.reduce((posts, post) => {
        if (post.id === action.postId) {
          post.likes = post.likes + 1;
        }
        posts.push(post);
        return posts;
      }, []);

    default:
      return state;
  }
}

export default posts;
