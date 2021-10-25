import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant, useSearchQuery } from '../../generated';
import { RootState } from '../store';

interface RestaurantSliceState {
   restaurant: Restaurant[];
}

const initialState: RestaurantSliceState = {
   restaurant: [],
};

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      search: (state, action: PayloadAction<string>) => {
         state.restaurant = [...state.restaurant];
      },
   },
});

export const { search } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search.restaurant;

export default searchSlice.reducer;
