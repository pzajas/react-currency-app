import "./CurrencyCard.css"

const CurrencyCard = ({
  currencyValuesList,
  baseCurrency,
  currency,
  country,
  input,
  handleDeleteCurrency,
}) => {
  const currencyPrice = parseFloat(currencyValuesList[currency])
  const convertedValue = (input * currencyPrice).toFixed(2)

  return (
    <div className="currency-card">
      <div className="first-two">
        <img
          className="flag"
          alt="country flag"
          height="30px"
          width="45px"
          src={`https://flagpedia.net/data/flags/w580/${country}.png`}
        />
        {currency}
        {/* <div>
          {input} {baseCurrency}
        </div> */}
      </div>

      <div className="value-to-convert">
        {convertedValue} {currency}
      </div>
      {/* <button
        className="delete-btn"
        value={currency}
        onClick={handleDeleteCurrency}
      ></button> */}
    </div>
  )
}

export default CurrencyCard
