import axios from "axios"
import React, { useState, useEffect } from "react"

import "./App.css"

const App = () => {
  const currencyApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=PLN`

  const [currencyList, setCurrencyList] = useState([])
  const [baseCurrency, setBaseCurrency] = useState(currencyApiUrl.slice(-3))

  useEffect(() => {
    axios.get(currencyApiUrl).then((response) => {
      setCurrencyList(response.data.data)
    })
  }, [])

  return <div className="App"></div>
}

export default App
