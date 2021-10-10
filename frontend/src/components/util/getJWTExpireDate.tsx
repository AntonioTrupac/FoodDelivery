import jwt_decode from 'jwt-decode';

export const getJWTExpireDate = (jwtToken: string, history: any) => {
   try {
      if (jwtToken) {
         const decodedToken = jwt_decode(jwtToken) as any;

         if (typeof decodedToken.exp === 'undefined') return 'Never expires!'; //checkiraj to kad pocnes radit

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
