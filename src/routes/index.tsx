import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Home, Login, Signup } from '../pages';

interface Props {}

export const AppRoutes: FC = (props: Props) => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} component={Home} exact />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
    </Switch>
  );
};
