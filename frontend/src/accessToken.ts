export const setAccessToken = (token: string) => {
   if (!token) {
      return;
   }
   return window.localStorage.setItem('jwt', token);
};

export const getAccessToken = () => {
   const token = window.localStorage.getItem('jwt');
   return token;
};
