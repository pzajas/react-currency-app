import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({
  currencyValuesList,
  currencyPrice,
  setBaseCurrency,
  input,
  userCurrencyList,
}) => {
  return (
    <div className="curr-list">
      {userCurrencyList.map(({ currencyCode, currencyName, countryFlag }) => (
        <ul className="currency-list" key={currencyCode}>
          <li key={currencyCode} className="currency-list-item">
            <CurrencyCard
              countryFlag={countryFlag}
              currencyCode={currencyCode}
              currencyName={currencyName}
              currencyValuesList={currencyValuesList}
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
