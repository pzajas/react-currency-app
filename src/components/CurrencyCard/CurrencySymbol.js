const CurrencySymbol = ({ currencySymbol }) => {
  return <div>{`${currencySymbol[0].toUpperCase()}${currencySymbol.substring(1, 2)}`}</div>
}

export default CurrencySymbol
