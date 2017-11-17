import * as React from 'react';

const Checkbox = ({ id, checked, onChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
  />
);

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
