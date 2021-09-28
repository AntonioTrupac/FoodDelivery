import { FC } from 'react';

import { Home } from '../../pages/Home';
import { RestaurantDetails } from '../../pages/RestaurantDetails';
import { Header } from '../page/Header';
import { PrivateRoute } from './PrivateRoute';

export const PrivateRoutes: FC = () => {
   return (
      <div>
         <Header />
         <PrivateRoute path='/home' component={Home} exact />
         <PrivateRoute path='/home/:id' component={RestaurantDetails} exact />
      </div>
   );
};
