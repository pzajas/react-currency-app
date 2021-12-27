import "./CurrencyCard.css"

const CurrencyCard = ({
  currencyValuesList,
  currencyName,
  input,
  countryFlag,
  currencyCode,
}) => {
  const currencyPrice = parseFloat(currencyValuesList[currencyCode])
  const convertedValue = (input * currencyPrice).toFixed(2)

  return (
    <div className="currency-card">
      <div className="first-two">
        <img
          className="flag"
          alt="country flag"
          height="30px"
          width="45px"
          src={countryFlag}
        />
        <div>
          <div className="currency-three-code">{currencyCode}</div>
          <div className="full-name">{currencyName}</div>
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
