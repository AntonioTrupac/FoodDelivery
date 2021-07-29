import { Component, FC, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import { getAccessToken } from '../../accessToken';
import jwt_decode from 'jwt-decode';
import { RouteProps } from 'react-router-dom';

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
