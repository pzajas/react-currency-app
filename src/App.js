import axios from "axios"
import React, { useState, useEffect } from "react"

import CurrencyList from "./components/CurrencyList"

import "./App.css"

const App = () => {
  const [everyCurrency, setEveryCurrency] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("PLN")

  const [input, setInput] = useState("")

  const currencyApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`

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
  }, [baseCurrency])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <div className="xxx">
        <CurrencyList
          everyCurrency={everyCurrency}
          popularCurrency={popularCurrency}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          input={input}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default App
