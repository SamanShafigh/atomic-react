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
    fontWeight: 'normal',
    color: '#A8A8A8'
  });
};

export const getUserInfoStyle = () => {
  return css({
    paddingLeft: '10px',
  });
}