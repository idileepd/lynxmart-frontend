import { Link } from 'react-router-dom';

import { LogoIcon } from '../icons';

export const IconLogo = () => {
  return (
    <Link to="/">
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <LogoIcon width={36} height={36} fill="#000" />
        <div
          style={{
            fontWeight: '400',
            fontSize: '1.3rem',
            color: '#000',
            letterSpacing: '.5px',
          }}
        >
          LynxMart
        </div>
      </div>
    </Link>
  );
};
