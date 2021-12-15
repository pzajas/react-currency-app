import React, { useState, useEffect } from "react"

import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({
  everyCurrency,
  popularCurrency,
  baseCurrency,
  currencyPrice,
  setBaseCurrency,
  input,
  handleInputChange,
}) => {
  const handleSelectChange = (event) => {
    setBaseCurrency(event.target.value)
  }
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
            />
          </li>
        </ul>
      ))}
      <button className="add-btn">ADD CURRENCY</button>
    </div>
  )
}

export default CurrencyList
