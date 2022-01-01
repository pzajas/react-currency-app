import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({ currencyCountryListWithValues, input, userCurrencyList, setUserCurrencyList }) => {
  return (
    <div className="curr-list">
      {userCurrencyList.map(({ currencyCode, currencyName, currencySymbol, countryFlag }) => (
        <ul className="currency-list" key={currencyCode}>
          <li key={currencyCode} className="currency-list-item">
            <CurrencyCard
              countryFlag={countryFlag}
              currencyCode={currencyCode}
              currencyName={currencyName}
              currencySymbol={currencySymbol}
              currencyCountryListWithValues={currencyCountryListWithValues}
              input={input}
              userCurrencyList={userCurrencyList}
              setUserCurrencyList={setUserCurrencyList}
            />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CurrencyList
