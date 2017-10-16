import { css } from 'glamor'

export const getTextStyle = () => {
  return css({
    verticalAlign: 'super',
  });
}

export const getWrapperStyle = (color) => {
  return css({
    color: color,
    paddingRight: '2px',
  });
}