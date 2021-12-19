import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({
  currencyValuesList,
  currencyCountryList,
  baseCurrency,
  currencyPrice,
  setBaseCurrency,
  input,
  handleInputChange,
  userCurrencyList,
}) => {
  const handleSelectChange = event => {
    setBaseCurrency(event.target.value)
  }

  return (
    <div className="curr-list">
      <div className="title-bar">CURRENCY CONVERTER</div>
      <div className="input-form">
        <input
          placeholder="Enter the amount to convert..."
          value={input}
          onChange={handleInputChange}
          className="currency-input"
        />
        <select onChange={handleSelectChange} className="currency-select">
          {currencyCountryList.map(({ currency }) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      {userCurrencyList.map(({ currency, country }) => (
        <ul className="currency-list" key={currency}>
          <li key={currency} className="currency-list-item">
            <CurrencyCard
              currency={currency}
              country={country}
              currencyValuesList={currencyValuesList}
              baseCurrency={baseCurrency}
              currencyPrice={currencyPrice}
              setBaseCurrency={setBaseCurrency}
              input={input}
            />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CurrencyList
