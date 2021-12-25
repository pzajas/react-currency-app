import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrenchyChange from "./components/DropDownMenus/CurrenchyChange"
import CurrencyUpdate from "./components/UpdateTimer/CurrencyUpdate"

import "./App.css"

const App = () => {
  const [currencyValuesList, setCurrencyValuesList] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("PLN")
  const [input, setInput] = useState("")

  const [fullCurrencyNameArrayOne, setFullCurrencyNameArrayOne] = useState([])
  const [fullCurrencyNameArraytwo, setfullCurrencyNameArrayTwo] = useState([])

  const fullCurrencyNameArraysCombined = [
    ...fullCurrencyNameArrayOne,
    ...fullCurrencyNameArraytwo,
  ]

  const [currencyCountryList, setCurrencyCountryList] = useState([
    { currency: "PLN", country: "pl" },
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "ch" },
    { currency: "RUB", country: "rs" },
    { currency: "AUD", country: "au" },
    { currency: "NOK", country: "no" },
    { currency: "CZK", country: "cz" },
    { currency: "CNY", country: "cn" },
    { currency: "GBP", country: "gb" },
  ])

  const [userCurrencyList, setUserCurrencyList] = useState([
    { currency: "CAD", country: "ca" },
    { currency: "USD", country: "us" },
    { currency: "CHF", country: "ch" },
    { currency: "RUB", country: "rs" },
  ])

  const currencyValuesApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`
  const currencyFullNamesApiUrlA = `http://api.nbp.pl/api/exchangerates/tables/A`
  const currencyFullNamesApiUrlB = `http://api.nbp.pl/api/exchangerates/tables/B`

  const addCurrencySelectOptions = currencyCountryList.filter(
    item => !userCurrencyList.find(({ currency }) => item.currency === currency)
  )

  const itemCurrency = userCurrencyList.map(object1 => ({
    ...object1,
    ...fullCurrencyNameArraysCombined.find(
      object2 => object2.code === object1.currency
    ),
  }))

  useEffect(() => {
    axios.get(currencyValuesApiUrl).then(response => {
      setCurrencyValuesList(response.data.data)
    })
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

  useEffect(() => {
    axios.get(currencyFullNamesApiUrlA).then(response => {
      setFullCurrencyNameArrayOne(response.data[0].rates)
    })
    axios.get(currencyFullNamesApiUrlB).then(response => {
      setfullCurrencyNameArrayTwo(response.data[0].rates)
    })
  }, [])

  const handleDeleteCurrency = e => {
    setUserCurrencyList(
      userCurrencyList.filter(item => item.currency !== e.target.value)
    )
  }

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

  const onKeyDown = e => {
    if (!e.key.match(/[a-zA-Z]/)) e.preventDefault()
  }

  console.log(fullCurrencyNameArraysCombined[145])

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
          baseCurrency={baseCurrency}
          handleSelectChange={handleSelectChange}
          currencyCountryList={currencyCountryList}
          userCurrencyList={userCurrencyList}
        />
      </div>

      <div className="currency-list-container">
        <CurrencyList
          handleDeleteCurrency={handleDeleteCurrency}
          currencyValuesList={currencyValuesList}
          currencyCountryList={currencyCountryList}
          userCurrencyList={userCurrencyList}
          itemCurrency={itemCurrency}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          input={input}
          handleInputChange={handleInputChange}
        />
      </div>
      <CurrencyAdd
        onKeyDown={onKeyDown}
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

// Disabled useEffect to save API credits

//const [lastCurrencyValueUpdate, setLastCurrencyValueUpdate] = useState([])

// useEffect(() => {
//   axios.get(currencyApiUrl).then(response => {
//     setTimeout(() => {
//       setLastCurrencyValueUpdate(response.data.query.timestamp)
//     }, 1000)
//   })
// }, [lastCurrencyValueUpdate])

/* <CurrencyUpdate lastCurrencyValueUpdate={lastCurrencyValueUpdate} /> */
