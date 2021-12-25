import CurrencyCard from "./CurrencyCard"
import "./CurrencyList.css"

const CurrencyList = ({
  currencyValuesList,
  baseCurrency,
  currencyPrice,
  setBaseCurrency,
  input,
  userCurrencyList,
  handleDeleteCurrency,
  itemCurrency,
}) => {
  return (
    <div className="curr-list">
      {userCurrencyList.map(({ currency, country }) => (
        <ul className="currency-list" key={currency}>
          <li key={currency} className="currency-list-item">
            <CurrencyCard
              itemCurrency={itemCurrency}
              handleDeleteCurrency={handleDeleteCurrency}
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
