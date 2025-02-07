import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
}

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setAssetsInfo: (state, action) => {
      state.assets = action.payload
    }
  },
})

export const { setAssetsInfo } = assetsSlice.actions

export default assetsSlice.reducer