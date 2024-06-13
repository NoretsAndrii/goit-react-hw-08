import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { authReducer } from './auth/slice';
import { modalReducer } from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});
