import { FiTrash } from "react-icons/fi"

import "./CurrencyDeleteButton.css"

const CurrencyDeleteButton = ({ userCurrencyList, setUserCurrencyList, currencyCode }) => {
  const handleRemoveFromTheList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.target.value))
  }
  return (
    <button className="delete-btn" value={currencyCode} onClick={handleRemoveFromTheList}>
      <FiTrash />
    </button>
  )
}

export default CurrencyDeleteButton
