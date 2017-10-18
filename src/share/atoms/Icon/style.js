import { css } from 'glamor'

export const getTextStyle = () => {
  return css({
    verticalAlign: 'super',
    color: 'red',
  });
}

export const getWrapperStyle = (color) => {
  return css({
    color: color,
    paddingLeft: '5px',
    paddingRight: '10px',
  });
}