import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CustomSelect from "./components/CustomSelect"

import "./App.css"

const App = () => {
  const [currencyValuesList, setCurrencyValuesList] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("PLN")
  const [input, setInput] = useState("")

  const [currencyCountryList, setCurrencyCountryList] = useState([
    { currency: "PLN", country: "pl" },
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "ch" },
    { currency: "RUB", country: "rs" },
    { currency: "AUD", country: "au" },
    { currency: "NOK", country: "no" },
    { currency: "CZK", country: "cz" },
  ])

  const [userCurrencyList, setUserCurrencyList] = useState([
    { currency: "PLN", country: "pl" },
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "ch" },
    { currency: "RUB", country: "rs" },
    { currency: "AUD", country: "au" },
    { currency: "NOK", country: "no" },
    { currency: "CZK", country: "cz" },
  ])

  const currencyApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`

  useEffect(() => {
    axios.get(currencyApiUrl).then(response => {
      setCurrencyValuesList(response.data.data)
    })
  }, [baseCurrency, currencyApiUrl])

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleAddToTheList = data => {
    currencyCountryList.filter(currency =>
      currency === data
        ? setUserCurrencyList([
            ...userCurrencyList,
            { currency: data.currency, country: data.country },
          ])
        : null
    )
  }

  return (
    <div className="App">
      <div className="currency-list-container">
        <CurrencyList
          currencyValuesList={currencyValuesList}
          currencyCountryList={currencyCountryList}
          userCurrencyList={userCurrencyList}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          input={input}
          handleInputChange={handleInputChange}
        />
      </div>
      <CustomSelect
        className="custom-select"
        handleAddToTheList={handleAddToTheList}
        currencyCountryList={currencyCountryList}
        setCurrencyCountryList={setBaseCurrency}
      />
    </div>
  )
}

export default App
