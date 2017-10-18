import { PANEL } from '../../../config/Theme';
import { css } from 'glamor'

export const getModalStyle = (isVisible) => {
  return css({
    display: isVisible? 'block' : 'none', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: '1', /* Sit on top */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto', /* Enable scroll if needed */
    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
  });
};

export const getModalContentStyle = () => {
  return css({
    border: `1px solid ${PANEL.BORDER}`,
    margin: '3% auto',
    padding: '10px',
    borderRadius: '3px',
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
    padding: '20px',
    backgroundColor: '#fefefe',
    width: '60%',
  });
}

export const getModalTitleStyle = () => {
  return css({
    fontSize: '18px',
    paddingBottom: '20px'
  });
}