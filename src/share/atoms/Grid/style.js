import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
const baseStyle = (direction, justify) => {
  return css({
    label: 'grid-container',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: direction,
    justifyContent: justify,
    //border: '1px solid',
    flexGrow: 1,
  });
}

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (direction, justify) => {
  return css(baseStyle(direction, justify));
};
