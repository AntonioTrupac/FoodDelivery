import { FC } from 'react';
import { Redirect } from 'react-router';

import { Home } from '../../pages/Home';
import { RestaurantDetails } from '../../pages/RestaurantDetails';
import { Header } from '../page/Header';
import { PrivateRoute } from './PrivateRoute';

export const PrivateRoutes: FC = () => {
   return (
      <div>
         <Header />
         <PrivateRoute path='/' component={Home} exact />
         <PrivateRoute
            path='/restaurant/:id'
            component={RestaurantDetails}
            exact
         />
      </div>
   );
};
