import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrenchyChange from "./components/DropDownMenus/CurrenchyChange"
import CurrencyUpdate from "./components/UpdateTimer/CurrencyUpdate"

import "./App.css"

const App = () => {
  const [currencyValuesList, setCurrencyValuesList] = useState([])
  //const [lastCurrencyValueUpdate, setLastCurrencyValueUpdate] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("USD")
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

  // Disabled useEffect to save API credits

  // useEffect(() => {
  //   axios.get(currencyApiUrl).then(response => {
  //     setTimeout(() => {
  //       setLastCurrencyValueUpdate(response.data.query.timestamp)
  //     }, 1000)
  //   })
  // }, [lastCurrencyValueUpdate])

  useEffect(() => {
    userCurrencyList.some(item =>
      item.currency === baseCurrency
        ? userCurrencyList.push(
            userCurrencyList.splice(
              userCurrencyList.findIndex(
                item => item.currency === baseCurrency
              ),
              1
            )[0]
          )
        : null
    )
  }, [baseCurrency])

  const handleInputChange = event => {
    const num = event.target.value

    setInput(num.replace(/[^\d.]/g, ""))
  }

  const handleSelectChange = event => {
    setBaseCurrency(event.currency)
  }

  const handleAddToTheList = data => {
    const mappedUserCurrencyList = userCurrencyList.map(item => item.currency)
    !mappedUserCurrencyList.includes(data.currency)
      ? setUserCurrencyList([
          { currency: data.currency, country: data.country },
          ...userCurrencyList,
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
        <CurrenchyChange
          handleSelectChange={handleSelectChange}
          currencyCountryList={currencyCountryList}
          userCurrencyList={userCurrencyList}
        />
      </div>
      {/* <CurrencyUpdate lastCurrencyValueUpdate={lastCurrencyValueUpdate} /> */}
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
        userCurrencyList={userCurrencyList}
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
