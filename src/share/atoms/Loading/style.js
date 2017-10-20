import { COLOR } from '../../../config/Theme';
import { css } from 'glamor'

export const getTextStyle = () => {
  return css({
    color: COLOR.GREEN,
  });
}

export const getSvgStyle = () => {
  return css({
    height: '30px',
  });
}