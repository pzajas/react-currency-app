const CurrencyName = ({ currencyName }) => {
  return (
    <div className="full-name">
      {currencyName.split(" ").map(word => `${word[0].toUpperCase()}${word.substring(1)} `)}
    </div>
  )
}

export default CurrencyName
