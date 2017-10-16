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

export const getUserSummaryStyle = () => {
  return css({
    display: 'block',
    textAlign: 'center',
    color: '#888888',
  });
};
