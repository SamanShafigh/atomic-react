import network from '../../fixtures/network';
import profile from '../../fixtures/profile';
import posts from '../../fixtures/posts';

// create an object for the default data
const state = {
  user: {
    loading: false,
    loaded: false,
    data: {}
  },
  profile,
  network,
  posts,
};

export default state;