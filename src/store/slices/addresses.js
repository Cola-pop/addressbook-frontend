import { createSlice } from '@reduxjs/toolkit';

export const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    addressesData: [],
  },
  reducers: {
    storeAddresses: (state, action) => {
      state.addressesData = action.payload;
    },
  },
});

export const { storeAddresses } = addressesSlice.actions;
export default addressesSlice.reducer;
