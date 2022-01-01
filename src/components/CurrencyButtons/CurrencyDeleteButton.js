import "./CurrencyDeleteButton.css"

const CurrencyDeleteButton = ({ userCurrencyList, setUserCurrencyList, currencyCode }) => {
  const handleRemoveFromTheList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.target.value))
  }
  return (
    <div>
      <button className="delete-btn" value={currencyCode} onClick={handleRemoveFromTheList}>
        X
      </button>
    </div>
  )
}

export default CurrencyDeleteButton
