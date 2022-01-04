import { useState, useEffect } from "react"

import axios from "axios"
import styled from "styled-components"

import CurrencyNavbar from "./components/CurrencyNavbar/CurrencyNavbar"
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrencyFilter from "./components/CurrencyFilter/CurrencyFilter"

const StyledContainer = styled.div`
  box-sizing: border-box;
  background-color: #232323;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 100%;
  margin: auto;
  margin-top: 100px;
`

const App = () => {
  const [input, setInput] = useState("")
  const [userCurrencyList, setUserCurrencyList] = useState([])

  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [prevCurrency, setPrevCurrency] = useState([])

  const [currencyCountryListFiltered, setCurrencyCountryListFiltered] = useState([])
  const [currencyValuesListFiltered, setCurrencyValuesListFiltered] = useState([])

  const [currencyCountryListWithValues, setCurrencyCountryListWithValues] = useState([])
  const [currencyContinentsFiltered, setCurrencyContinentsFiltered] = useState([])

  const CURRENCY_VALUES_API_URL = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`
  const CURRENCY_COUNTRY_API_URL = `https://restcountries.com/v3.1/all`

  //------------FETCH DATA FROM API AND MAKE ARRAYS OF CURRENCIES AND VALUES ------------//

  useEffect(() => {
    axios.get(CURRENCY_COUNTRY_API_URL).then(response => {
      const currencyCountryListArray = response.data
        .filter(item => item.currencies)
        .map(item => ({
          currencyCode: Object.keys(item.currencies)[0],
          currencyName: Object.values(item.currencies)[0].name,
          countryFlag: item.flags.png,
          currencySymbol: Object.values(item.currencies)[0].symbol,
          currencyContinent: item.continents[0],
        }))
      setCurrencyCountryListFiltered([...currencyCountryListArray])
      console.log(currencyCountryListFiltered)
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

  useEffect(() => {
    setCurrencyCountryListWithValues(
      currencyCountryListFiltered
        .map(object1 => ({
          ...object1,
          ...currencyValuesListFiltered.find(object2 => object2.nation === object1.currencyCode),
        }))
        .filter(({ nation }) => nation)
        .filter((v, i, a) => a.findIndex(t => t.currencyCode === v.currencyCode) === i)
        .sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))
    )
  }, [currencyCountryListFiltered])

  useEffect(() => {
    setCurrencyContinentsFiltered(currencyCountryListWithValues)
  }, [currencyCountryListWithValues])

  //-----------------------------JSX-----------------------------//
  return (
    <StyledContainer>
      <CurrencyNavbar />
      <CurrencyFilter
        setCurrencyContinentsFiltered={setCurrencyContinentsFiltered}
        currencyCountryListWithValues={currencyCountryListWithValues}
      />
      <CurrencyForm
        value={input}
        setInput={setInput}
        userCurrencyList={userCurrencyList}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        currencyCountryListWithValues={currencyCountryListWithValues}
      />
      <CurrencyList
        className="currency-list-container"
        currencyCountryListWithValues={currencyCountryListWithValues}
        userCurrencyList={userCurrencyList}
        setUserCurrencyList={setUserCurrencyList}
        input={input}
      />
      <CurrencyAdd
        className="custom-select"
        currencyContinentsFiltered={currencyContinentsFiltered}
        userCurrencyList={userCurrencyList}
        setUserCurrencyList={setUserCurrencyList}
      />
    </StyledContainer>
  )
}

export default App
