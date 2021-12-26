import { useState, useEffect } from "react"
import axios from "axios"

import CurrencyList from "./components/CurrencyList"
import CurrencyAdd from "./components/DropDownMenus/CurrencyAdd"
import CurrenchyChange from "./components/DropDownMenus/CurrenchyChange"
import CurrencyUpdate from "./components/UpdateTimer/CurrencyUpdate"

import "./App.css"

const App = () => {
  const [currencyValuesList, setCurrencyValuesList] = useState([])
  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [input, setInput] = useState("")

  const [fullCurrencyNameArrayOne, setFullCurrencyNameArrayOne] = useState([])
  const [fullCurrencyNameArraytwo, setfullCurrencyNameArrayTwo] = useState([])

  const fullCurrencyNameArraysCombined = [
    ...fullCurrencyNameArrayOne,
    ...fullCurrencyNameArraytwo,
  ]

  const [x, setX] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setX(response.data)
    })
  }, [])

  const xxx = []
  const ggg = []
  for (const [key, value] of Object.entries(currencyValuesList)) {
    ggg.push({
      nation: key,
      value: value,
    })
  }

  const ooo = x
    .filter(item => item.currencies)
    .forEach(item =>
      xxx.push({
        currency: Object.keys(item.currencies)[0],
        country: Object.values(item.currencies)[0].name,
        flag: item.flags.png,
      })
    )

  const baseArr = xxx.sort((a, b) => a.currency.localeCompare(b.currency))

  const nationList = ggg.sort((a, b) => a.nation.localeCompare(b.nation))

  const baseArr2 = baseArr.map(object1 => ({
    ...object1,
    ...nationList.find(object2 => object2.nation === object1.currency),
  }))

  const baseArrFiltered = baseArr2.filter(({ nation }) => nation)

  const [currencyCountryList, setCurrencyCountryList] = useState([])

  const [userCurrencyList, setUserCurrencyList] = useState([])

  const currencyValuesApiUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=86c489a0-5a0d-11ec-a1ea-9309d8ea8734&base_currency=${baseCurrency}`
  const currencyFullNamesApiUrlA = `http://api.nbp.pl/api/exchangerates/tables/A`
  const currencyFullNamesApiUrlB = `http://api.nbp.pl/api/exchangerates/tables/B`

  const addCurrencySelectOptions = baseArrFiltered.filter(
    item => !userCurrencyList.find(({ currency }) => item.currency === currency)
  )

  const itemCurrency = userCurrencyList.map(object1 => ({
    ...object1,
    ...fullCurrencyNameArraysCombined.find(
      object2 => object2.currency === object1.nation
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
    const mappedUserCurrencyList = baseArrFiltered.map(item => item.currency)
    mappedUserCurrencyList.includes(data.currency)
      ? setUserCurrencyList([
          {
            currency: data.currency,
            country: data.country,
            flag: data.flag,
          },
          ...userCurrencyList,
        ])
      : alert("To do: use SweetAlert")
  }

  const onKeyDown = e => {
    if (!e.key.match(/[a-zA-Z]/)) e.preventDefault()
  }

  console.log(baseArrFiltered)

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
          baseArrFiltered={baseArrFiltered}
          userCurrencyList={userCurrencyList}
        />
      </div>

      <div className="currency-list-container">
        <CurrencyList
          baseArrFiltered={baseArrFiltered}
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
