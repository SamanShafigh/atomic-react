import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
const baseStyle = (direction) => {
  return css({
    label: 'grid-container',
    display: 'flex',
    height: '100%',
    flexDirection: direction,
    flexGrow: 1,
  });
}

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (direction) => {
  return css(baseStyle(direction));
};
