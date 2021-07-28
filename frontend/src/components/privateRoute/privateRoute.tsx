import { Component, FC } from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import { getAccessToken } from '../../accessToken';

type PrivateRouteProps = {
  exact?: boolean;
  component: FC;
  path: string;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({
  exact,
  component,
  path,
}) => {
  //   const history = useHistory();
  const accessToken = getAccessToken();

  return (
    <Route
      exact={exact}
      path={path}
      component={component}
      render={(props) => {
        return accessToken ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};
