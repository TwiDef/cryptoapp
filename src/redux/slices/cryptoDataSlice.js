import { createSlice } from '@reduxjs/toolkit';
import { percentDiff } from '../../helpers';

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
    }
  },
})

export const { setAssetsInfo, setCoinsInfo } = cryptoDataSlice.actions

export default cryptoDataSlice.reducer

/* 
dispatch(setAssetsInfo(cryptoAssets && cryptoAssets.map(asset => {
        const coin = cryptoData.result.find(c => c.id === asset.id)
  
        return {
          ...asset,
          grow: asset.price < coin.price,
          totalAmount: (asset.amount * coin.price),
          totalProfit: (asset.amount * coin.price - asset.amount * asset.price),
          growPercent: percentDiff(asset.price, coin.price)
        }
*/