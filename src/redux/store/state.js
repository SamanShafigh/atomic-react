import network from '../../fixtures/network';
import profile from '../../fixtures/profile';
import posts from '../../fixtures/posts';

// create an object for the default data
const state = {
  loading: false,
  user: {},
  profile,
  network,
  posts
};

export default state;