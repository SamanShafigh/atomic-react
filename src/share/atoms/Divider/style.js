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
      backgroundImage: 'linear-gradient(left, #f0f0f0, #8c8c8c, #f0f0f0)'
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
