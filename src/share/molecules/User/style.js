import { PANEL, COLOR } from "../../../config/Theme";
import { css } from "glamor";

export const getUserContainerStyle = () => {
  return css({
    border: `1px solid ${PANEL.BORDER}`,
    backgroundColor: "#fff",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "5px",
    borderRadius: "3px",
    height: "180px",
    flex: "1",
    width: "120px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)"
  });
};

export const getUserNameStyle = () => {
  return css({
    textAlign: "center",
    paddingLeft: "4px"
  });
};

export const getUserNameLinkStyle = () => {
  return css({
    cursor: "pointer"
  });
};

export const getUserImageStyle = () => {
  return css({
    textAlign: "center",
    paddingLeft: "4px"
  });
};

export const getUserOccupationStyle = () => {
  return css({
    textAlign: "center",
    fontSize: "12px",
    color: COLOR.DARK_GRAY
  });
};
