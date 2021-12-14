import CurrencyCard from "./CurrencyCard"

import "./CurrencyList.css"

const CurrencyList = ({
  everyCurrency,
  popularCurrency,
  baseCurrency,
  currencyPrice,
  setBaseCurrency,
}) => {
  return (
    <div className="master">
      <div className="title-bar">CURRENCY CONVERTER</div>
      {popularCurrency.map(({ currency, country }) => (
        <ul className="currency-list" key={currency}>
          <li className="currency-list-item">
            <CurrencyCard
              currency={currency}
              country={country}
              everyCurrency={everyCurrency}
              baseCurrency={baseCurrency}
              currencyPrice={currencyPrice}
              setBaseCurrency={setBaseCurrency}
            />
          </li>
        </ul>
      ))}
      <div className="base-currency">{baseCurrency}</div>
      <button className="add-btn">ADD CURRENCY</button>
    </div>
  )
}

export default CurrencyList
