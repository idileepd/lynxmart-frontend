import { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';

import { SpinnerIcon } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { delay } from '@/utils';

interface ILoginForm {
  toggleForm: () => void;
}
export function SignupForm({ toggleForm }: ILoginForm) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('');
  };

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const onSubmit = async () => {
    try {
      if (!validateEmail()) {
        setError('Enter a valid email');

        return;
      }
      if (!validatePassword()) {
        setError('Password length should be 8 characters length');

        return;
      }

      setIsLoading(true);

      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await delay(4);
      console.log(useCredential.user);

      navigate('/');
    } catch (err) {
      console.log(err);
      setError('Something Went Wrong !');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight text-3xl">
          Sign up
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-3">
        <Label className="sr-only" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          value={email}
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
          onChange={onEmailChange}
        />

        <Label className="sr-only" htmlFor="password">
          Password
        </Label>

        <Input
          id="password"
          placeholder="password"
          type="password"
          disabled={isLoading}
          onChange={onPasswordChange}
          value={password}
        />
      </div>
      {error && (
        <p className="text-sm text-muted-foreground text-rose-500">{error}</p>
      )}
      <Button onClick={onSubmit}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {isLoading && <SpinnerIcon width={18} height={18} />}
          Sign up with Email
        </div>
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <Button variant="outline" type="button" onClick={toggleForm}>
        Login to your Account
      </Button>

      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our <br />
        <a
          className="underline underline-offset-4 hover:text-primary"
          href="/terms"
        >
          Terms of Service{'  '}
        </a>
        and{'  '}
        <a
          className="underline underline-offset-4 hover:text-primary"
          href="/privacy"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
