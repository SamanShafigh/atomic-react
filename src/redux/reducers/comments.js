import Actions from '../../lib/constants/Actions';

function comments(state = {}, action) {
	switch(action.type) {
		case Actions.POST_OPEN_POST_COMMENTS:
			return [];

		case Actions.POST_CLOSE_POST_COMMENTS:
			return [];

		case Actions.POST_COMMENTS_FETCHED:
			return action.data;

		default:
			return state;
	}
}

export default comments;
