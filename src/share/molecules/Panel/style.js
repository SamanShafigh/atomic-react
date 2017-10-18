import { PANEL } from '../../../config/Theme';
import { css } from 'glamor'

export const getPanelStyle = () => {
  return css({
    border: `1px solid ${PANEL.BORDER}`,
    padding: '10px',
    borderRadius: '3px',
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
  });
};

export const getPanelTitleStyle = () => {
  return css({
    fontSize: '18px',
    paddingBottom: '20px',
  });
}