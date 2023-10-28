// .login-box {
// position: absolute;
// margin-left: auto;
// margin-right: auto;
// left: 0;
// right: 0;
// text-align: center;
// width: max-content;

// }

// Create your Styles. Remember, since React-JSS uses the default preset,

import { createUseStyles } from 'react-jss';

// most plugins are available without further configuration needed.
export const loginStyles = createUseStyles({
  box: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    width: 'maxContent',
  },
  myLabel: {},
});
