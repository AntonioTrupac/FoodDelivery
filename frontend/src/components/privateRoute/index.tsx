import { FC, useEffect } from 'react';
import { useMeQuery } from '../../generated';
import { Route } from 'react-router';

import { EditUserInfo } from '../../pages/EditUserInfo';
import { Home } from '../../pages/Home';
import { RestaurantDetails } from '../../pages/RestaurantDetails';
import { useSessionStore } from '../../store/session';
import { Header } from '../page/Header';
import { PrivateRoute } from './PrivateRoute';

export const PrivateRoutes: FC = () => {
   const { data: user, loading, error } = useMeQuery();
   const { me } = user || {};

   const { sessionUpdated } = useSessionStore();

   useEffect(() => {
      if (me) {
         sessionUpdated(me);
      }
   }, [me, sessionUpdated]);

   return (
      <>
         <Header />

         <Route path='/' component={Home} exact />
         <Route path='/restaurant/:id' component={RestaurantDetails} exact />
         <Route path='/editUserInfo' component={EditUserInfo} exact />
      </>
   );
};
