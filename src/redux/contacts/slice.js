import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logout } from '../auth/operations';

const contactsInitialState = {
  items: [],
  loading: false,
  error: false,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(updateContact.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.error = false;
        state.items = [];
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const selectContacts = state => state.contacts.items;
// export const selectLoading = state => state.contacts.loading;
// export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter, selectTypeFilter],
//   (contacts, filter, type) => {
//     const searchKey = type === 'name' ? 'name' : 'number';
//     return contacts
//       .filter(contact => {
//         return contact[searchKey].toLowerCase().includes(filter.toLowerCase());
//       })
//       .toSorted((a, b) => a.name.localeCompare(b.name));
//   }
// );
