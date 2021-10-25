import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slice/searchSlice';

export const store = configureStore({
   reducer: {
      search: searchSlice,
   },
});

//infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//Infered type: {ex: posts:PostsState}
export type AppDispatch = typeof store.dispatch;
