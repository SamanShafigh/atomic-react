import React from "react";
import PropTypes from "prop-types";
import { getConnectionStyle } from "./style.js";
import ProfileImage from "../ProfileImage";

const Connection = ({ name, img, occupation }) => (
  <span className={getConnectionStyle()}>
    <ProfileImage url={img} size="small" title={name} />
  </span>
);

Connection.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  occupation: PropTypes.string
};

export default Connection;
