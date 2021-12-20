import React, { useState } from "react"

import "./CurrencyCard.css"

const CurrencyCard = ({
  currencyValuesList,
  baseCurrency,
  currency,
  country,
  input,
}) => {
  const currencyPrice = parseFloat(currencyValuesList[currency])
  const convertedValue = (input * currencyPrice).toFixed(4)

  return (
    <div className="currency-card">
      <div className="first-two">
        <img
          className="flag"
          alt="country flag"
          height="40px"
          width="60px"
          src={`https://flagpedia.net/data/flags/w580/${country}.png`}
        />
        <div>
          {input} {baseCurrency}
        </div>
      </div>

      <div className="value-to-convert">
        {convertedValue} {currency}
      </div>
    </div>
  )
}

export default CurrencyCard
