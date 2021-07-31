import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const getJWTExpireDate = (jwtToken: string, history: any) => {
   try {
      if (jwtToken) {
         const decodedToken = jwt_decode(jwtToken) as any;

         if (decodedToken.exp < (new Date().getTime() + 1) / 1000) {
            console.log('Token is expired');
            window.localStorage.clear();
            history.push('/landing-page');
         } else {
            return true;
         }
      }
   } catch (error) {
      console.log('Token is expired', error);
      history.push('/landing-page');
      return false;
   }
};
