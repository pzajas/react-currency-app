import { useState, useEffect } from "react"

import axios from "axios"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"

import CurrencyNavbar from "./components/CurrencyNavbar/CurrencyNavbar"
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import CurrencyList from "./pages/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import Favourite from "./pages/CurrencyFavourite"
import About from "./pages/About"

const StyledContainer = styled.div`
  box-sizing: border-box;
  background-color: #232323;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 2px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 2500px) {
    width: 60%;
  }

  @media (max-width: 1800px) {
    width: 70%;
  }

  @media (max-width: 1600px) {
    width: 75%;
  }

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

const App = () => {
  const USER_CURENCY_LIST_INITIAL_STATE = JSON.parse(localStorage.getItem("currency")) || []
  const USER_FAVOURITE_CURRENCY_INITIAL_STATE = JSON.parse(localStorage.getItem("favourite")) || []
  const BASE_CURENCY_INITIAL_STATE = JSON.parse(localStorage.getItem("base_currency")) || ["USD"]

  const [input, setInput] = useState([])

  const [userCurrencyList, setUserCurrencyList] = useState(USER_CURENCY_LIST_INITIAL_STATE)
  const [userFavouriteCurrencyList, setUserFavouriteCurrencyList] = useState(USER_FAVOURITE_CURRENCY_INITIAL_STATE)

  const [baseCurrency, setBaseCurrency] = useState(BASE_CURENCY_INITIAL_STATE)
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
      console.log(response.data)
    })
  }, [baseCurrency, CURRENCY_COUNTRY_API_URL])

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
        .filter(item => item.currencyCode !== baseCurrency)
        .filter(item => item.currencyCode !== prevCurrency.includes(item))
        //.filter(item => item.currencyContinent === "Europe")
        .filter(item => item.currencyName !== "krone")
        .filter((v, i, a) => a.findIndex(t => t.currencyCode === v.currencyCode) === i)
        .sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))
    )
  }, [prevCurrency, baseCurrency, currencyCountryListFiltered])

  useEffect(() => {
    setCurrencyContinentsFiltered(currencyCountryListWithValues)
  }, [currencyCountryListWithValues])

  //-----------------------------SAVE TO LOCAL STORAGE-----------------------------//

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(userCurrencyList))
  }, [userCurrencyList])

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(userFavouriteCurrencyList))
  }, [userFavouriteCurrencyList])

  useEffect(() => {
    localStorage.setItem("base_currency", JSON.stringify(baseCurrency))
  }, [baseCurrency])

  //-----------------------------JSX-----------------------------//
  return (
    <StyledContainer>
      <CurrencyNavbar
        setCurrencyContinentsFiltered={setCurrencyContinentsFiltered}
        currencyCountryListWithValues={currencyCountryListWithValues}
        currencyContinentsFiltered={currencyContinentsFiltered}
      />
      <CurrencyForm
        value={input}
        setInput={setInput}
        userCurrencyList={userCurrencyList}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        currencyCountryListWithValues={currencyCountryListWithValues}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CurrencyList
              userCurrencyList={userCurrencyList}
              setUserCurrencyList={setUserCurrencyList}
              input={input}
              baseCurrency={baseCurrency}
              currencyValuesListFiltered={currencyValuesListFiltered}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
            />
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <Favourite
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              currencyValuesListFiltered={currencyValuesListFiltered}
              input={input}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <CurrencyAdd
        currencyContinentsFiltered={currencyContinentsFiltered}
        userCurrencyList={userCurrencyList}
        setUserCurrencyList={setUserCurrencyList}
      />
    </StyledContainer>
  )
}

export default App
