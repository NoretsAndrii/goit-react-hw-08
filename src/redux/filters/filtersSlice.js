import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  type: 'name',
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
    setFilterType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setFilter, setFilterType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;
export const selectTypeFilter = state => state.filters.type;
