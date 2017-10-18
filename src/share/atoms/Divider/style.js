import { css } from 'glamor'

/**
 *
 * @param styles
 * @returns {*}
 */
const baseStyle = (options) => {
  return css({
      width: '95%',
      border: '0',
      height: '1px',
      background: '#eee',
      backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
  });
};

/**
 *
 * @param size
 * @param isInactive
 * @returns {*}
 */
export const getStyle = (options) => {
  return css(baseStyle(options));
};
