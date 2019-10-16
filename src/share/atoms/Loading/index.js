import React from "react";
import PropTypes from "prop-types";
import { getTextStyle, getSvgStyle } from "./style.js";
import lodingIcon from "./loaders/6.svg";

const Loading = ({ title, type, isLoading }) =>
  isLoading ? (
    type === "text" ? (
      <span className={getTextStyle()}>{title}</span>
    ) : (
      <img className={getSvgStyle()} src={lodingIcon} />
    )
  ) : null;

Loading.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool
};

Loading.defaultProps = {
  title: " Posting ...",
  type: "svg", // text | svg
  isLoading: false
};

export default Loading;
