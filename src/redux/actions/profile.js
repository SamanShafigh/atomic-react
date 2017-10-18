import Actions from '../../lib/constants/Actions';

// fetch posts
export function fetchProfile() {
  return {
    type: Actions.PROFILE_FETCH_USER,
  }
}
