import { useState } from 'react';
import { Label } from '@radix-ui/react-label';

import { SpinnerIcon } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ILoginForm {
  toggleForm: () => void;
}
export function SignupForm({ toggleForm }: ILoginForm) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = () => {
    try {
      if (!validateEmail()) {
        setError('Enter a valid email');

        return;
      }

      setIsLoading(true);
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
      </div>
      {error && (
        <p className="text-sm text-muted-foreground text-rose-500">{error}</p>
      )}
      <Button onClick={onSubmit}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {isLoading && <SpinnerIcon width={18} height={18} />}
          Sign In with Email
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
