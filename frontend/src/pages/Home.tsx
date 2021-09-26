import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAccessToken } from '../accessToken';
import { Header } from '../components/page/Header';
import { Restaurants } from '../components/page/Restaurants';
import { getJWTExpireDate } from '../components/util/getJWTExpireDate';

export const Home: FC = () => {
   const history = useHistory();
   const accessToken = getAccessToken();

   useEffect(() => {
      if (accessToken) {
         getJWTExpireDate(accessToken, history);
      }
   }, [history, accessToken]);

   return (
      <div>
         <Header />
         <Restaurants />
      </div>
   );
};
