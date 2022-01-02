import Button from "../../styles/Button.styled"
import { FiTrash } from "react-icons/fi"

const CurrencyDeleteButton = ({ userCurrencyList, setUserCurrencyList, currencyCode }) => {
  const handleRemoveFromTheList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.target.value))
  }
  return (
    <Button bg="lightblue" value={currencyCode} onClick={handleRemoveFromTheList}>
      <FiTrash />
    </Button>
  )
}

export default CurrencyDeleteButton
