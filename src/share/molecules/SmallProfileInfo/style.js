import { css } from 'glamor'

/**
 *
 * @param direction
 * @returns {*}
 */
export const getUserNameStyle = () => {
  return css({
    fontWeight: 'bold',
    display: 'block',
  });
};

export const getUserEmailStyle = () => {
  return css({
    display: 'block',
  });
};
