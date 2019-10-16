import React from "react";
import PropTypes from "prop-types";

import ProfileInfo from "../../share/organisms/ProfileInfo";
import Modal from "../../share/molecules/Modal";
import Grid from "../../share/atoms/Grid";
import Cell from "../../share/atoms/Cell";

const UserModal = ({ user, closeUserModal }) => (
  <Modal isVisible={user.loaded} onCancel={closeUserModal}>
    <Grid>
      <Cell>
        <ProfileInfo
          name={user.data.name}
          img={user.data.img}
          email={user.data.email}
          location={user.data.location}
          connection={user.data.connection}
          summary={user.data.summary}
        />
      </Cell>
    </Grid>
  </Modal>
);

UserModal.propTypes = {
  closeUserModal: PropTypes.func,
  user: PropTypes.shape({
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    data: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      img: PropTypes.string
    })
  })
};

export default UserModal;
