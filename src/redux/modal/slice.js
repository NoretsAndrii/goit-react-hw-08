import { createSlice } from '@reduxjs/toolkit';

const modalSlise = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    typeModal: '',
    initialValues: {
      name: '',
      number: '',
    },
    id: null,
  },
  reducers: {
    setModalOpen(state, action) {
      state.isModalOpen = action.payload.isModalOpen;
      state.typeModal = action.payload.typeModal;
      state.initialValues = action.payload.initialValues;
      state.id = action.payload.id;
    },
  },
});

export const modalReducer = modalSlise.reducer;
export const { setModalOpen } = modalSlise.actions;
// export const selectIsModalOpen = state => state.modal.isModalOpen;
// export const selectTypeModal = state => state.modal.typeModal;
// export const selectModalSettings = state => state.modal;
