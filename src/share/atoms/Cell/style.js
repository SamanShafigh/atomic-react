import { css } from 'glamor'

/**
 *
 * @param styles
 * @returns {*}
 */
const baseStyle = (options) => {
  const styles = Object.keys(options).reduce((p, c) => {
    const value = options[c];
    if (!value) return p;

    if (c === 'size') {
      return Object.assign(p, {
        flexGrow: value,
        flexShrink: 12 / parseInt(value, 10),
      });
    }

    return Object.assign(p, { [c]: value });
  }, {});

  return css(
    Object.assign({}, styles, {
      label: 'cell',
      display: 'flex',
      width: '100%',
    })
  );
};

/**
 *
 * @param size
 * @param isInactive
 * @returns {*}
 */
export const getStyle = (options) => {
  return css(baseStyle(options));
};
