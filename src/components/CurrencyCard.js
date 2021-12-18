import React, { useState } from "react"

import "./CurrencyCard.css"

const CurrencyCard = ({
  everyCurrency,
  baseCurrency,
  currency,
  country,
  input,
  popularCurrency,
  setPopularCurrency,
}) => {
  const [convertedCurrency, setConvertedCurrency] = useState(false)
  const currencyPrice = parseFloat(everyCurrency[currency])

  const convertedValue = (input * currencyPrice).toFixed(4)

  const handleConvertCurrency = () => {
    setConvertedCurrency(convertedCurrency ? false : true)
  }

  return (
    <div
      // onClick={handleConvertCurrency}
      className={convertedCurrency ? "currency-card-yellow" : "currency-card"}
    >
      <div className="first-two">
        <img
          className="flag"
          alt="country flag"
          height="40px"
          width="60px"
          // src={`https://www.worldometers.info/img/flags/${country}-flag.gif`}
          src={`https://flagpedia.net/data/flags/w580/${country}.png`}
        />
        <div>{currency}</div>
      </div>

      <div className="value-to-convert">
        {convertedValue} {baseCurrency}
      </div>
    </div>
  )
}

export default CurrencyCard
