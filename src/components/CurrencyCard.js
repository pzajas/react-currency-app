import "./CurrencyCard.css"

const CurrencyCard = ({
  everyCurrency,
  baseCurrency,
  currency,
  country,
  setBaseCurrency,
}) => {
  const currencyPrice = parseFloat(everyCurrency[currency])

  const handleBaseCurrency = () => {
    setBaseCurrency(currency)
  }

  return (
    <div className="currency-card">
      {currency}
      <div className="value">
        {currencyPrice} {baseCurrency}
      </div>
      <button onClick={handleBaseCurrency}>Set Curr</button>
      <img
        className="country-flag"
        height="50px"
        width="60px"
        src={
          "https://www.worldometers.info/img/flags/" +
          `${country}` +
          "-flag.gif"
        }
      />
    </div>
  )
}

export default CurrencyCard
