import "./CurrencyCard.css"

const CurrencyCard = ({ currencyValuesList, currencyName, input, countryFlag, currencyCode }) => {
  const currencyPrice = parseFloat(currencyValuesList[currencyCode])
  const convertedValue = (input * currencyPrice).toFixed(2)

  const EU_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png`
  const UK_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png`

  return (
    <div className="currency-card">
      <div className="first-two">
        <img
          className="flag"
          alt="country flag"
          height="30px"
          width="45px"
          src={currencyCode === "EUR" ? EU_FLAG : currencyCode === "GBP" ? UK_FLAG : countryFlag}
        />
        <div>
          <div className="currency-three-code">{currencyCode}</div>
          <div className="full-name">
            {currencyName.split(" ").map(word => `${word[0].toUpperCase()}${word.substring(1)} `)}
          </div>
        </div>
      </div>

      <div className="value-to-convert">{convertedValue}</div>
      {/* <button
        className="delete-btn"
        value={currency}
        onClick={handleDeleteCurrency}
      ></button> */}
    </div>
  )
}

export default CurrencyCard
