import React from "react";
import PropTypes from "prop-types";
import { getStyle } from "./style.js";

const Divider = ({ ...styleProps }) => <hr className={getStyle()} />;

Divider.propTypes = {
  width: PropTypes.string
};

Divider.defaultProps = {
  width: "100%"
};

export default Divider;
