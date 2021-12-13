import CurrencyCard from "./CurrencyCard"

import "./CurrencyList.css"

const CurrencyList = ({ everyCurrency, popularCurrency, baseCurrency }) => {
  return (
    <div className="master">
      {popularCurrency.map(({ currency, country }) => (
        <ul className="currency-list">
          <li className="currency-list-item">
            <CurrencyCard
              currency={currency}
              country={country}
              everyCurrency={everyCurrency}
              baseCurrency={baseCurrency}
            />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CurrencyList
