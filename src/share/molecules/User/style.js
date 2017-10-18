import { PANEL } from '../../../config/Theme';
import { css } from 'glamor'

export const getUserContainerStyle = () => {
  return css({
    border: `1px solid ${PANEL.BORDER}`,
    padding: '10px',
    margin: '5px',
    borderRadius: '3px',
    height: '150px',
    flex: '1',
    width: '100px',
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
  });
}

export const getUserNameStyle = () => {
  return css({
    textAlign: 'center',
    paddingLeft: '4px',
  });
}

export const getUserImageStyle = () => {
  return css({
    textAlign: 'center',
    paddingLeft: '4px',
  });
}