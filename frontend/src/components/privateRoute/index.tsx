import { FC, useEffect } from 'react';
import { useMeQuery } from '../../generated';

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
      <div>
         <Header />
         <PrivateRoute path='/' component={Home} exact />
         <PrivateRoute
            path='/restaurant/:id'
            component={RestaurantDetails}
            exact
         />
         <PrivateRoute path='/editUserInfo' component={EditUserInfo} exact />
      </div>
   );
};
