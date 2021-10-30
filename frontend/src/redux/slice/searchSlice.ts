import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant, SearchQuery } from '../../generated';
import { RootState } from '../store';

interface RestaurantSliceState {
   restaurant: Restaurant[];
}

const initialState: RestaurantSliceState = {
   restaurant: [],
};

export const searchSlice = createSlice({
   name: 'search', //should be unique across the whole project
   initialState,
   reducers: {
      setSearchRestaurant(state, action: PayloadAction<SearchQuery>) {
         const data = action.payload;

         state.restaurant = [...data.search];
      },
   },
});

export const { setSearchRestaurant } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) =>
   state.setSearchRestaurant.restaurant;

export default searchSlice.reducer;
