// position: absolute;
// margin-left: auto;
// margin-right: auto;
// left: 0;
// right: 0;
// text-align: center;
// width: max-content;

import { createUseStyles } from 'react-jss';

export const loginStyles = createUseStyles({
  box: {
    width: '100vw',
    display: 'flex',
  },
  descriptionBox: {
    width: '50%',
    // backgroundColor: '#18181b',
    backgroundColor: '#2463eb',
    height: '100vh',
  },
  loginBox: {
    width: '50%',
    backgroundColor: '#ffffff',
    height: '100vh',
  },
  logoBox: {
    display: 'flex',
    gap: '10px',
    paddingTop: '28px',
    paddingLeft: '22px',
  },
  name: {
    fontWeight: '400',
    fontSize: '1.3rem',
    color: '#fff',
    letterSpacing: '.5px',
  },
});
