import { FC, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { getAccessToken } from '../../accessToken';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { RouteProps, useHistory } from 'react-router-dom';

type PrivateRouteProps = {
   exact?: boolean;
   component: FC;
   path: string;
};

interface RouterProps extends RouteProps {}

export const PrivateRoute: FC<PrivateRouteProps & RouterProps> = ({
   component: Component,
   ...rest
}) => {
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
         />{' '}
      </>
   );
};
