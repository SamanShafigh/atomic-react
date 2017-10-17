import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
const baseStyle = (url, size) => {
  return css({
    display: "inline-flex",
    width: `${size}px`,
    height: `${size}px`,
    margin: "1em auto",
    backgroundImage: `url(${url})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    '-webkit-border-radius': "99em",
    '-moz-border-radius': "99em",
    borderRadius: "99em",
    border: `${(size * 0.03)}px solid #eee`,
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
  });
}

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (url, size) => {
  return css(baseStyle(url, size));
};
