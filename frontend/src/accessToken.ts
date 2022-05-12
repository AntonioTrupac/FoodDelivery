export const setAccessToken = (token: string) => {
   if (!token) {
      return;
   }
   return window.localStorage.setItem('jwt', token);
};

export const getAccessToken = () => {
   return window.localStorage.getItem('jwt');
};
