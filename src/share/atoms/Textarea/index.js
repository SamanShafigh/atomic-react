import React from "react";
import PropTypes from "prop-types";
import { getStyle } from "./style.js";

const Textarea = ({ onChange, value, size, disabled = false }) => (
  <textarea
    value={value}
    onChange={e => onChange(e)}
    className={getStyle(size, disabled)}
  />
);

Textarea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
};

Textarea.defaultProps = {
  size: "medium",
  disabled: false
};

export default Textarea;
