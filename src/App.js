import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrencyChange from "./components/DropDownMenus/CurrencyChange"

import "./App.css"

const App = () => {
  const [currencyValuesList, setCurrencyValuesList] = useState([])
  const [currencyCountryList, setCurrencyCountryList] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("USD")

  const [userCurrencyList, setUserCurrencyList] = useState([])
  const [input, setInput] = useState("")

  const currencyCountryListFiltered = []
  const currencyValuesListFiltered = []

  const CURRENCY_VALUES_API_URL = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`
  const CURRENCY_COUNTRY_API_URL = `https://restcountries.com/v3.1/all`

  //-----------------------------FETCH DATA FROM API-----------------------------//

  useEffect(() => {
    axios.get(CURRENCY_VALUES_API_URL).then(response => {
      setCurrencyValuesList(response.data.data)
    })
    userCurrencyList.some(item =>
      item.currencyCode === baseCurrency
        ? userCurrencyList.push(
            userCurrencyList.splice(
              userCurrencyList.findIndex(
                item => item.currencyCode === baseCurrency
              ),
              1
            )[0]
          )
        : null
    )
  }, [baseCurrency])

  useEffect(() => {
    axios.get(CURRENCY_COUNTRY_API_URL).then(response => {
      setCurrencyCountryList(response.data)
    })
  }, [])

  //-----------------------------PREPARE CURRENCY ARRAYS-----------------------------//

  for (const [key, value] of Object.entries(currencyValuesList)) {
    currencyValuesListFiltered.push({
      nation: key,
      value: value,
    })
  }

  currencyCountryList
    .filter(item => item.currencies && item.continents[0] === "Europe")
    .forEach(item =>
      currencyCountryListFiltered.push({
        currencyCode: Object.keys(item.currencies)[0],
        currencyName: Object.values(item.currencies)[0].name,
        countryFlag: item.flags.png,
      })
    )

  const currencyCountryListWithValues = currencyCountryListFiltered
    .map(object1 => ({
      ...object1,
      ...currencyValuesListFiltered.find(
        object2 => object2.nation === object1.currencyCode
      ),
    }))
    .filter(({ nation }) => nation)

  //-----------------------------FUNCTIONS TO HANDLE STATE-----------------------------//

  const addCurrencySelectOptions = currencyCountryListWithValues.filter(
    item =>
      !userCurrencyList.find(
        ({ currencyCode }) => item.currencyCode === currencyCode
      )
  )

  const handleInputChange = event => {
    const num = event.target.value

    setInput(num.replace(/[^\d.]/g, ""))
  }

  const handleSelectChange = event => {
    setBaseCurrency(event.currencyCode)
  }

  const handleAddToTheList = data => {
    const mappedUserCurrencyList = currencyCountryListWithValues.map(
      item => item.currencyCode
    )
    mappedUserCurrencyList.includes(data.currencyCode)
      ? setUserCurrencyList([
          {
            currencyCode: data.currencyCode,
            currencyName: data.currencyName,
            countryFlag: data.countryFlag,
          },
          ...userCurrencyList,
        ])
      : alert("To do: use SweetAlert")
  }

  //-----------------------------VALIDATE-----------------------------//

  const onKeyDown = e => {
    if (!e.key.match(/[a-zA-Z]/)) e.preventDefault()
  }

  //-----------------------------JSX-----------------------------//

  return (
    <div className="App">
      <div className="title-bar">CURRENCY CONVERTER</div>
      <div className="input-form">
        <input
          placeholder="Enter the amount to convert..."
          className="currency-input"
          value={input}
          onChange={handleInputChange}
        />
        <CurrencyChange
          baseCurrency={baseCurrency}
          currencyCountryListWithValues={currencyCountryListWithValues}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <div className="currency-list-container">
        <CurrencyList
          currencyCountryListWithValues={currencyCountryListWithValues}
          currencyValuesList={currencyValuesList}
          userCurrencyList={userCurrencyList}
          input={input}
          setBaseCurrency={setBaseCurrency}
          handleInputChange={handleInputChange}
        />
      </div>
      <CurrencyAdd
        className="custom-select"
        addCurrencySelectOptions={addCurrencySelectOptions}
        handleAddToTheList={handleAddToTheList}
        onKeyDown={onKeyDown}
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

// const handleDeleteCurrency = e => {
//   setUserCurrencyList(
//     userCurrencyList.filter(item => item.currencyCode !== e.target.value)
//   )
// }
