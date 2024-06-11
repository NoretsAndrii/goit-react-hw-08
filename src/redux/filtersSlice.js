import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;
