import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/CurrencyAdd"

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
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "ch" },
    { currency: "RUB", country: "rs" },
    { currency: "AUD", country: "au" },
    { currency: "NOK", country: "no" },
  ])

  const currencyApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`

  const addCurrencySelectOptions = currencyCountryList.filter(
    item => !userCurrencyList.find(({ currency }) => item.currency === currency)
  )

  useEffect(() => {
    axios.get(currencyApiUrl).then(response => {
      setCurrencyValuesList(response.data.data)
    })
  }, [baseCurrency, currencyApiUrl])

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSelectChange = event => {
    setBaseCurrency(event.target.value)
  }

  const handleAddToTheList = data => {
    const mappedUserCurrencyList = userCurrencyList.map(item => item.currency)
    !mappedUserCurrencyList.includes(data.currency)
      ? setUserCurrencyList([
          ...userCurrencyList,
          { currency: data.currency, country: data.country },
        ])
      : alert("To do: use SweetAlert")
  }

  return (
    <div className="App">
      <div className="title-bar">CURRENCY CONVERTER</div>
      <div className="input-form">
        <input
          placeholder="Enter the amount to convert..."
          value={input}
          onChange={handleInputChange}
          className="currency-input"
        />
        <select onChange={handleSelectChange} className="currency-select">
          {currencyCountryList.map(({ currency }) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
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
      <CurrencyAdd
        className="custom-select"
        addCurrencySelectOptions={addCurrencySelectOptions}
        handleAddToTheList={handleAddToTheList}
        currencyCountryList={currencyCountryList}
        setCurrencyCountryList={setBaseCurrency}
      />
    </div>
  )
}

export default App
