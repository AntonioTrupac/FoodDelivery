import { FC } from 'react';

import { EditUserInfo } from '../../pages/EditUserInfo';
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
         <PrivateRoute path='/editUserInfo' component={EditUserInfo} exact />
      </div>
   );
};
