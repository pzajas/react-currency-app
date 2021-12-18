import React, { useState } from "react"

import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({
  everyCurrency,
  popularCurrency,
  baseCurrency,
  setPopularCurrency,
  currencyPrice,
  setBaseCurrency,
  input,
  handleInputChange,
}) => {
  const [addCurrencyClick, setAddCurrencyClick] = useState(true)

  const [addCurrencyInput, setAddCurrencyInput] = useState("")

  const handleToggleAddCurrencyButton = () => {
    setAddCurrencyClick(addCurrencyClick ? false : true)
  }

  const handleAddCurrencyInput = event => {
    setAddCurrencyInput(event.target.value.toUpperCase())
  }

  const handleSelectChange = event => {
    setBaseCurrency(event.target.value)
  }

  let ppp = ""

  const inp = popularCurrency.filter(({ currency, country }) =>
    currency === addCurrencyInput ? (ppp = country) : null
  )

  const handleSubmitCurrency = event => {
    event.preventDefault()

    setPopularCurrency([
      ...popularCurrency,
      {
        currency: addCurrencyInput,
        country: ppp,
      },
    ])
    setAddCurrencyInput("")
    setAddCurrencyClick(true)
    ppp = "xxx"
  }
  console.log(ppp)
  return (
    <div className="master">
      <div className="title-bar">CURRENCY CONVERTER</div>
      <div className="input-form">
        <input
          placeholder="Enter the amount to convert..."
          value={input}
          onChange={handleInputChange}
          className="currency-input"
        />
        <select onChange={handleSelectChange} className="currency-select">
          {popularCurrency.map(({ currency }) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      {popularCurrency.map(({ currency, country }) => (
        <ul className="currency-list" key={currency}>
          <li className="currency-list-item">
            <CurrencyCard
              currency={currency}
              country={country}
              everyCurrency={everyCurrency}
              baseCurrency={baseCurrency}
              currencyPrice={currencyPrice}
              setBaseCurrency={setBaseCurrency}
              input={input}
              popularCurrency={popularCurrency}
              setPopularCurrency={setPopularCurrency}
            />
          </li>
        </ul>
      ))}
      {addCurrencyClick ? (
        <button onClick={handleToggleAddCurrencyButton} className="add-btn">
          ADD CURRENCY
        </button>
      ) : (
        <form className="form-input-currency">
          <input
            className="currency-inp"
            value={addCurrencyInput}
            onChange={handleAddCurrencyInput}
          />
          <button onClick={handleSubmitCurrency}>Submit</button>
        </form>
      )}
    </div>
  )
}

export default CurrencyList
