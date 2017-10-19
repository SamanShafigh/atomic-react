import { COLOR, INPUT } from '../../../config/Theme';
import { css } from 'glamor'

const widthSize = {
  large: '100%',
  medium: '10rem',
  small: '5rem',
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
    height: '140px',
    width: widthSize[size],
    background: INPUT.BG_COLOR,
    padding: '0.33rem 1rem',
    border: `${INPUT.BORDER_SIZE} solid ${INPUT.BORDER}`,
    borderRadius: '5px',
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
