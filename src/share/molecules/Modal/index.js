import React from "react";
import PropTypes from "prop-types";
import {
  getModalStyle,
  getModalContentStyle,
  getModalTitleStyle
} from "./style.js";

import Grid from "../../atoms/Grid";
import Cell from "../../atoms/Cell";
import Button from "../../atoms/Button";

const Modal = ({ onCancel, children, title, isVisible }) => (
  <div className={getModalStyle(isVisible)}>
    <div className={getModalContentStyle()}>
      <Grid>
        <Cell>
          <div className={getModalTitleStyle()}>{title}</div>
        </Cell>
      </Grid>
      <Grid>
        <Cell>
          <div>{children}</div>
        </Cell>
      </Grid>
      <Grid>
        <Cell>
          <Button onClick={() => onCancel()}>Cancel</Button>
        </Cell>
      </Grid>
    </div>
  </div>
);

Modal.propTypes = {
  onCancel: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

export default Modal;
