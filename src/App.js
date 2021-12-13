import axios from "axios"
import React, { useState, useEffect } from "react"

import "./App.css"
import CurrencyList from "./components/CurrencyList"

const App = () => {
  const currencyApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=PLN`

  const [everyCurrency, setEveryCurrency] = useState([])
  const [baseCurrency, setBaseCurrency] = useState(currencyApiUrl.slice(-3))

  const popularCurrency = [
    { currency: "PLN", country: "pl" },
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "sz" },
    { currency: "RUB", country: "rs" },
    { currency: "AUD", country: "as" },
    { currency: "NOK", country: "no" },
    { currency: "CZK", country: "ez" },
  ]

  useEffect(() => {
    axios.get(currencyApiUrl).then((response) => {
      setEveryCurrency(response.data.data)
    })
  }, [])

  return (
    <div className="App">
      <CurrencyList
        everyCurrency={everyCurrency}
        popularCurrency={popularCurrency}
      />
    </div>
  )
}

export default App
