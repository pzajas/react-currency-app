import React, { useState } from "react"

import "./CurrencyCard.css"

const CurrencyCard = ({
  everyCurrency,
  baseCurrency,
  currency,
  country,
  input,
  setBaseCurrency,
}) => {
  const [convertedCurrency, setConvertedCurrency] = useState(false)
  const currencyPrice = parseFloat(everyCurrency[currency])

  const convertedValue = (input * currencyPrice).toFixed(4)

  const handleBaseCurrency = () => {
    setBaseCurrency(currency)
  }

  const handleConvertCurrency = () => {
    setConvertedCurrency(convertedCurrency ? false : true)
  }

  return (
    <div
      onClick={handleConvertCurrency}
      className={convertedCurrency ? "currency-card-yellow" : "currency-card"}
    >
      <img
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
      {convertedCurrency ? <div>{convertedValue}</div> : "0.0000"}
      <button className="base-btn" onClick={handleBaseCurrency}>
        {baseCurrency}
      </button>
    </div>
  )
}

export default CurrencyCard
