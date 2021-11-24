import { FC } from 'react';
import { Redirect, Route } from 'react-router';
import { getAccessToken } from '../../accessToken';
import { RouteProps } from 'react-router-dom';

type PrivateRouteProps = {
   exact?: boolean;
   component: FC;
   path: string;
};

type Routes = RouteProps & PrivateRouteProps;

export const PrivateRoute: FC<Routes> = ({ component: Component, ...rest }) => {
   const accessToken = getAccessToken();

   return (
      <>
         <Route
            {...rest}
            render={(props) => {
               return accessToken ? (
                  <Component {...props} />
               ) : (
                  <Redirect to={'/landing-page'} />
               );
            }}
         />
      </>
   );
};
