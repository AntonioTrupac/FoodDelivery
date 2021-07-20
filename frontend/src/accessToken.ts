let accessToken = '';

export const setAccessToken = (token: string) => {
   window.localStorage.setItem('jwt', token);
}

export const getAccessToken = () => {
   return window.localStorage.getItem('jwt');
}