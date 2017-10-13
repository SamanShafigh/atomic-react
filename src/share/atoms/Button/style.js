import { COLOR } from '../../../config/Theme';
import { css } from 'glamor'

const widthSize = {
  large: '100%',
  medium: '12.5rem',
  small: '10rem',
  default: '12.5rem'
}

/**
 *
 * @param size
 * @returns {*}
 */
const baseStyle = (size) => {
  return css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '2.75rem',
    width: widthSize[size],
    /* allow buttons to extend vertically */
    padding: '0.33rem 1rem',
    borderRadius: '2px',
    border: `1px solid ${COLOR.ORANGE}`,
    background: COLOR.WHITE,
    color: COLOR.ORANGE,
    cursor: 'pointer',
    fontWeight: 400,
    ':hover': {
      boxShadow: `0 0 0 1px ${COLOR.ORANGE}`,
    },
  });
}

/**
 *
 * @param disabled
 * @returns {*}
 */
const disabledStyle = (disabled) => {
  if (disabled) {
    return css({
      background: COLOR.GRAY,
      cursor: 'not-allowed',
      color: COLOR.WHITE,
      border: `1px solid ${COLOR.WHITE}`,
      ':hover': {
        boxShadow: 'none',
        borderColor: COLOR.WHITE,
        color: COLOR.WHITE,
      },
    });
  }
  return null;
}

/**
 *
 * @param size
 * @param isInactive
 * @returns {*}
 */
export const getStyle = (size = 'default', disabled = false) => {
  return css(baseStyle(size), disabledStyle(disabled));
};
