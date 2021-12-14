import React, { useState, useEffect } from "react"

import "./CurrencyCard.css"

const CurrencyCard = ({
  everyCurrency,
  baseCurrency,
  currency,
  country,
  setBaseCurrency,
}) => {
  const [input, setInput] = useState(0)
  const [showInput, setShowInput] = useState(false)
  const currencyPrice = parseFloat(everyCurrency[currency])

  const convertedValue = (input * currencyPrice).toFixed(4)

  const handleBaseCurrency = () => {
    setBaseCurrency(currency)
  }

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleShowInput = () => {
    setShowInput(showInput ? false : true)
  }

  return (
    <div className="currency-card">
      <img
        onClick={handleShowInput}
        className="country-flag"
        height="30px"
        width="50px"
        src={
          "https://www.worldometers.info/img/flags/" +
          `${country}` +
          "-flag.gif"
        }
      />
      {currency}
      <div className="value">{currencyPrice.toFixed(4)}</div>
      {showInput ? (
        <div>
          <input
            className="input"
            autoFocus={true}
            value={input}
            onChange={handleInput}
          />
          <div>{convertedValue > 0 ? convertedValue : "0.0000"}</div>
        </div>
      ) : null}

      <button className="base-btn" onClick={handleBaseCurrency}>
        {baseCurrency}
      </button>
    </div>
  )
}

export default CurrencyCard
