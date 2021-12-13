import "./CurrencyCard.css"

const CurrencyCard = ({ everyCurrency, baseCurrency, currency, country }) => {
  return (
    <div className="currency-card">
      {currency}
      <div className="value">
        {parseFloat(everyCurrency[currency])} {baseCurrency}
      </div>
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
