import { createSlice } from '@reduxjs/toolkit';
import { formatAsset, percentDiff } from '../../helpers';

const initialState = {
  assets: [],
  coins_data: []
}

export const cryptoDataSlice = createSlice({
  name: 'crypto_data',
  initialState,
  reducers: {
    setCoinsInfo: (state, action) => {
      state.coins_data = action.payload
    },
    setAssetsInfo: (state, action) => {
      state.assets = (action.payload).map(asset => {
        const coin = state.coins_data.result.find(c => c.id === asset.id)

        return {
          ...asset,
          grow: asset.price < coin.price,
          totalAmount: (asset.amount * coin.price),
          totalProfit: (asset.amount * coin.price - asset.amount * asset.price),
          growPercent: percentDiff(asset.price, coin.price)
        }
      })
    },
    addNewAsset: (state, action) => {
      const coin = state.coins_data.result.find(c => c.id === action.payload.id)

      state.assets = [...state.assets, formatAsset(action.payload, coin)]
    }
  },
})

export const { setAssetsInfo, setCoinsInfo, addNewAsset } = cryptoDataSlice.actions

export default cryptoDataSlice.reducer