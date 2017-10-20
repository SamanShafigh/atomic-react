import network from '../../fixtures/network';
import profile from '../../fixtures/profile';

// create an object for the default data
const state = {
  // This object keeps the status of app related to each state segment
  status: {
    posts: {
      loading: true,
      loaded: false,
    },
    post: {},
    network: {},
  },
  // I think this type of defining `news` state object adds more complexity for reducer.
  // So I think it is better to keep `loaded` in `status` object and keep `news` just
  // a simple array of news objects
  news: {
    data: [],
    loaded: false
  },
  user: {
    loading: false,
    loaded: false,
    data: {}
  },
  profile,
  network,
  posts: []
};

export default state;