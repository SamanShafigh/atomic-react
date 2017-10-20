import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
export const getStyle = (direction, align, wrap, justify) => {
  return css({
    label: 'grid-container',
    display: 'flex',
    display: '-webkit-flex',
    height: '100%',
    width: '100%',
    direction: direction,
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    //border: '1px solid',
    alignContent: 'flex-start',
    flexGrow: 1,
  });
};
