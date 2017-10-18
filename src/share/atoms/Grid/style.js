import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
const baseStyle = (direction, justify, wrap) => {
  return css({
    label: 'grid-container',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    //border: '1px solid',
    flexGrow: 1,
  });
}

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (direction, justify, wrap) => {
  return css(baseStyle(direction, justify, wrap));
};
