import { css } from "glamor";

export const getTitleStyle = () => {
  return css({
    fontWeight: "bold",
    display: "block",
    paddingRight: "10px"
  });
};

export const getDateStyle = () => {
  return css({
    paddingRight: "10px",
    color: "#A8A8A8"
  });
};
