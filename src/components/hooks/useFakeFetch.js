import React from "react";
import crypto_data from '../../../crypto_data.json';

export const useFakeFetch = () => {
  const [cryptoData, setCryptoData] = React.useState(null)
  const [cryptoAssets, setCryptoAssets] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {

    const fakeFetch = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(crypto_data)
        }, 1500)
      })
    }

    const getData = async () => {
      setLoading(true)

      const res = await fakeFetch()
      setCryptoData(res)
      setCryptoAssets(res.cryptoAssets)

      setLoading(false)
    }
    getData()

  }, [])

  return { cryptoData, cryptoAssets, loading }
}


