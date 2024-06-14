import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectTypeFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectTypeFilter],
  (contacts, filter, type) => {
    const searchKey = type === 'name' ? 'name' : 'number';
    return contacts
      .filter(contact => {
        return contact[searchKey].toLowerCase().includes(filter.toLowerCase());
      })
      .toSorted((a, b) => a.name.localeCompare(b.name));
  }
);
