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
    'background-image': `url(${url})`,
    'background-size': "70%",
    'background-repeat': "no-repeat",
    'background-position': "50% 80%",
    '-webkit-border-radius': "99em",
    '-moz-border-radius': "99em",
    'border-radius': "99em",
    'border': `${(size * 0.04)}px solid #eee`,
    'box-shadow': "0 3px 5px rgba(0, 0, 0, 0.3)",
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
