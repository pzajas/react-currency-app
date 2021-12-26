import "./CurrencyCard.css"

const CurrencyCard = ({
  currencyValuesList,
  currency,
  country,
  input,
  itemCurrency,
  handleDeleteCurrency,
  flag,
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
          src={flag}
        />
        <div>
          <div className="currency-three-code">{currency}</div>
          <div className="full-name">{country}</div>
        </div>
      </div>

      <div className="value-to-convert">{convertedValue}</div>
      {/* <button
        className="delete-btn"
        value={currency}
        onClick={handleDeleteCurrency}
      ></button> */}
    </div>
  )
}

export default CurrencyCard
