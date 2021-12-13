const CurrencyList = ({ everyCurrency, popularCurrency }) => {
  return (
    <div>
      {popularCurrency.map(({ currency, country }) => (
        <li>
          {currency} {country}
        </li>
      ))}
    </div>
  )
}

export default CurrencyList
