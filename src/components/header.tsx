import { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ExitIcon, HomeIcon } from '../assets/icons';
import { ROUTES } from '../constants/routes';

export const Header: FC = () => {
  const [user, setUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(true);
  const history = useHistory();

  return (
    <header className="h-12 bg-white border-b border-gray-primary mb-8 fixed w-screen">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {loggedInUser ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <HomeIcon />
                </Link>

                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    history.push(ROUTES.LOGIN);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      history.push(ROUTES.LOGIN);
                    }
                  }}
                >
                  <ExitIcon />
                </button>
                {user && (
                  <div className="flex items-center cursor-pointer">
                    {/* <Link to={`/p/${user?.username}`}>
                      <img
                        className="rounded-full h-8 w-8 flex"
                        src={`/images/avatars/${user?.username}.jpg`}
                        alt={`${user?.username} profile`}
                        onError={(e) => {}}
                      />
                    </Link> */}
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGNUP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
