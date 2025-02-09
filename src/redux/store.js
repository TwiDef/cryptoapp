import { configureStore } from '@reduxjs/toolkit';
import cryptoDataSlice from './slices/cryptoDataSlice';

export const store = configureStore({
  reducer: {
    crypto_data: cryptoDataSlice
  },
})