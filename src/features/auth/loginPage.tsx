import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { loginStyles } from './styles';
import { SignupForm } from './SignupForm';

import { LogoIcon } from '@/components/icons';

export function LoginPage() {
  const classes = loginStyles();

  const [isLoginForm, setLoginForm] = useState(true);

  return (
    <div className={classes.box}>
      <div className={classes.descriptionBox}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Link to="/">
            <div className={classes.logoBox}>
              <LogoIcon width={32} height={32} fill="#fff" />
              <div className={classes.name}>LynxMart</div>
            </div>
          </Link>
          <div
            style={{
              paddingLeft: '22px',
              paddingTop: '30%',
              fontSize: '60px',
              color: '#fff',
            }}
          >
            One Stop For Every Fleet Spare Parts
          </div>
        </div>
      </div>
      <div className={classes.loginBox}>
        <div
          style={{
            margin: '35% auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isLoginForm ? (
            <LoginForm
              toggleForm={() => {
                setLoginForm((p) => !p);
              }}
            />
          ) : (
            <SignupForm
              toggleForm={() => {
                setLoginForm((p) => !p);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
