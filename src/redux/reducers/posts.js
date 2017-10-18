import Actions from '../../lib/constants/Actions';

function posts(state = [], action) {
  console.log(action.type);

  switch(action.type) {
    /**
     * Add a post that user want to post it
     */
    case Actions.POST_ADD_POST :
      const post = {
        id: action.id,
        summary: action.summary,
        img: "",
        likes: 0,
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
    case Actions.POST_POST_ADDED :
      const newPosts = [];
      for (let i = 0; i < state.length; i++) {
        const newPost = state[i];
        if (newPost.id === action.tempId) {
          newPost.isPosting = false;
        }
        newPosts.push(newPost);
      }

      return newPosts;

    default:
      return state;
  }
}

export default posts;
