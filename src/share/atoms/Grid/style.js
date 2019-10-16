import { css } from "glamor";

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (direction, align, wrap, justify) => {
  return css({
    label: "grid-container",
    display: "flex",
    width: "100%",
    flexWrap: wrap
  });
};
