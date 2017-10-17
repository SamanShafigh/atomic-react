import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../share/molecules/Panel';
import Connection from '../../share/molecules/Connection';

const Connections = ({ friends }) => (
  <Panel title="Connections">
    {friends.map((user) => (
      <Connection name={user.name} img={user.img} key={user.id} />
    ))}
  </Panel>
);

Connections.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
  }),
}

export default Connections;
