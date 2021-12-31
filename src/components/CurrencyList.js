import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({ currencyCountryListWithValues, input, userCurrencyList }) => {
  return (
    <div className="curr-list">
      {userCurrencyList.map(({ currencyCode, currencyName, countryFlag }) => (
        <ul className="currency-list" key={currencyCode}>
          <li key={currencyCode} className="currency-list-item">
            <CurrencyCard
              countryFlag={countryFlag}
              currencyCode={currencyCode}
              currencyName={currencyName}
              currencyCountryListWithValues={currencyCountryListWithValues}
              input={input}
            />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CurrencyList
