import React from "react";
import PropTypes from "prop-types";
import {
  getUserContainerStyle,
  getUserNameStyle,
  getUserImageStyle,
  getUserNameLinkStyle,
  getUserOccupationStyle
} from "./style.js";

import ProfileImage from "../ProfileImage";

const User = ({ fetchUser, id, name, img, occupation }) => (
  <div className={getUserContainerStyle()}>
    <div className={getUserImageStyle()}>
      <ProfileImage url={img} title={name} />
    </div>
    <div className={getUserNameStyle()}>
      <a className={getUserNameLinkStyle()} onClick={() => fetchUser(id)}>
        {name}
      </a>
      <div className={getUserOccupationStyle()}>{occupation}</div>
    </div>
  </div>
);

User.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  occupation: PropTypes.string
};

export default User;
