import React from 'react';
import PropTypes from 'prop-types';
import { getPostStyle, getPostFooterStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileInfo from '../../molecules/ProfileInfo';
import Icon from '../../atoms/Icon';
import Divider from '../../atoms/Divider';

const PostComment = ({ comment }) => (
	<div>
		<Grid>
			<Cell>
				<ProfileInfo
					name={comment.user.name}
					img={comment.user.img}
					email={comment.user.email}
				/>
			</Cell>
			<Cell>
				<span className={getPostStyle()}>
          {comment.summary}
        </span>
			</Cell>
		</Grid>
		<Grid>
			<Cell size="1">
				<a onClick={() => {}}>
					<Icon name="ic_thumb_up">Like</Icon>
				</a>
				<a onClick={() => {}}>
					<Icon name="ic_thumb_down">Dislike</Icon>
				</a>
			</Cell>
		</Grid>
		<Grid>
			<Cell>
				<Divider />
			</Cell>
		</Grid>
	</div>
);

PostComment.propTypes = {
	id: PropTypes.number,
	summary: PropTypes.string,
	user: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		email: PropTypes.string,
		img: PropTypes.string,
	}),
}

export default PostComment;
