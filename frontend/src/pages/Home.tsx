import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAccessToken } from '../accessToken';
import { Header } from '../components/page/Header';
import { useMeQuery } from '../generated';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { client } from '../apollo/apollo';
import { getJWTExpireDate } from '../components/util/getJWTExpireDate';

export const Home: FC = () => {
   const history = useHistory();
   const accessToken = getAccessToken();

   useEffect(() => {
      //   if (accessToken) {
      //      const decodedToken = jwt_decode(accessToken) as any;

      //      const now = new Date();

      //      if (decodedToken.exp * 1000 < now.getTime()) {
      //         console.log('Token expired');
      //         window.localStorage.clear();
      //         //  client.cache.reset();
      //         history.push('/landing-page');
      //      }

      //   }
      if (accessToken) {
         getJWTExpireDate(accessToken, history);
      }
   }, [history, accessToken]);
   return (
      <div>
         {/* <h1>{data?.me?.email}</h1> */}
         <Header />
      </div>
   );
};
