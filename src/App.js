import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyInput from "./components/CurrencyInput/CurrencyInput"
import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrencyChange from "./components/DropDownMenus/CurrencyChange"

import "./App.css"

const App = () => {
  const [input, setInput] = useState("")
  const [userCurrencyList, setUserCurrencyList] = useState([])

  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [prevCurrency, setPrevCurrency] = useState([])

  const [currencyCountryListFiltered, setCurrencyCountryListFiltered] = useState([])
  const [currencyValuesListFiltered, setCurrencyValuesListFiltered] = useState([])

  const CURRENCY_VALUES_API_URL = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`
  const CURRENCY_COUNTRY_API_URL = `https://restcountries.com/v3.1/all`

  //------------FETCH DATA FROM API AND MAKE ARRAYS OF CURRENCIES AND VALUES ------------//

  useEffect(() => {
    axios.get(CURRENCY_COUNTRY_API_URL).then(response => {
      console.log(response.data)
      const currencyCountryListArray = response.data
        .filter(item => item.currencies && item.continents[0] === "Europe")
        .map(item => ({
          currencyCode: Object.keys(item.currencies)[0],
          currencyName: Object.values(item.currencies)[0].name,
          countryFlag: item.flags.png,
          currencySymbol: Object.values(item.currencies)[0].symbol,
        }))
      setCurrencyCountryListFiltered([...currencyCountryListArray])
    })
  }, [CURRENCY_COUNTRY_API_URL])

  useEffect(() => {
    axios.get(CURRENCY_VALUES_API_URL).then(response => {
      const currencyValuesListArray = Object.entries(response.data.data).map(([key, value]) => ({
        nation: key,
        price: value,
      }))
      setCurrencyValuesListFiltered([...currencyValuesListArray])
    })
  }, [baseCurrency, CURRENCY_VALUES_API_URL])

  //------------FILTER BASE CURRENCY FROM THE USER LIST AND ADD PREV CURRENCY ------------//

  useEffect(() => {
    const userCurrencyListCopy = [...userCurrencyList]
    setPrevCurrency([])
    const filteredBaseCurrency = userCurrencyListCopy.filter(currency => currency.currencyCode !== baseCurrency)

    userCurrencyListCopy.map(currency => {
      if (currency.currencyCode === baseCurrency) {
        setPrevCurrency([currency])
      }
    })

    setUserCurrencyList([...filteredBaseCurrency, ...prevCurrency])
  }, [baseCurrency])

  //-----------------------------PREPARE CURRENCY ARRAYS-----------------------------//

  const currencyCountryListWithValues = currencyCountryListFiltered
    .map(object1 => ({
      ...object1,
      ...currencyValuesListFiltered.find(object2 => object2.nation === object1.currencyCode),
    }))
    .filter(({ nation }) => nation)
    .filter((v, i, a) => a.findIndex(t => t.currencyCode === v.currencyCode) === i)
    .sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))

  //-----------------------------JSX-----------------------------//
  return (
    <div className="App">
      <div className="title-bar">CURRENCY CONVERTER</div>
      <div className="input-form">
        <CurrencyInput value={input} setInput={setInput} />
        <CurrencyChange
          userCurrencyList={userCurrencyList}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          currencyCountryListWithValues={currencyCountryListWithValues}
        />
      </div>
      <div className="currency-list-container">
        <CurrencyList
          currencyCountryListWithValues={currencyCountryListWithValues}
          userCurrencyList={userCurrencyList}
          setUserCurrencyList={setUserCurrencyList}
          input={input}
        />
      </div>
      <CurrencyAdd
        className="custom-select"
        currencyCountryListWithValues={currencyCountryListWithValues}
        userCurrencyList={userCurrencyList}
        setUserCurrencyList={setUserCurrencyList}
      />
    </div>
  )
}

export default App

// const baseArr = currencyCountryListFiltered.sort((a, b) =>
//   a.currency.localeCompare(b.currency)
// )

// const nationList = currencyValuesListFiltered.sort((a, b) =>
//   a.nation.localeCompare(b.nation)
// )
