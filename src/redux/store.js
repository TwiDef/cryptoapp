import { configureStore } from '@reduxjs/toolkit';
import assetsSlice from './slices/assetsSlice';

export const store = configureStore({
  reducer: {
    assetsInfo: assetsSlice
  },
})