import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

interface Props {}

export const Login: FC = (props: Props) => {
  const [password, setPassword] = useState<string>();
  const [emailAddress, setEmailAddress] = useState<string>();
  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpeg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded-sm">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>

          {/* {error && <p className="mb-4 text-xs text-red-primary">{error}</p>} */}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              type="submit"
              className={`bg-blue-400 text-white w-full rounded h-8 font-bold`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded-sm border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGNUP} className="font-bold text-blue-400">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
