import { css } from 'glamor'

/**
 *
 * @returns {*}
 */
export const getStyle = () => {
  return css({
    margin: '1em auto',
    'border': '1px solid #eee',
    'box-shadow': '0 3px 5px rgba(0, 0, 0, 0.3)',
  });
};

export const getPostStyle = () => {
  return css({
    margin: '1em auto',
  });
}