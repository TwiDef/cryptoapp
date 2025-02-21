export const percentDiff = (a, b) => {
  return 100 * Math.abs((a - b) / ((a + b) / 2))
}

export const formatAsset = (asset, coin) => {
  return ({
    ...asset,
    date: asset.date,
    grow: asset.price < coin.price,
    totalAmount: (asset.amount * coin.price),
    totalProfit: (asset.amount * coin.price - asset.amount * asset.price),
    growPercent: percentDiff(asset.price, coin.price)
  })
}