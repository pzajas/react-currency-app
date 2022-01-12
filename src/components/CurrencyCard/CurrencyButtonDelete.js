import Minus from "../../assets/Minus.png"

import styled from "styled-components"

const StyledDeleteButton = styled.button`
  width: 3rem;
  border: none;
  background-color: transparent;

  & img {
    width: 1.8rem;
    background-color: white;
  }
`

const CurrencyButtonDelete = ({ currencyCode, userCurrencyList, setUserCurrencyList }) => {
  const handleDeleteCurrencyFromTheUserList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.currentTarget.value))
  }
  return (
    <StyledDeleteButton value={currencyCode} onClick={handleDeleteCurrencyFromTheUserList}>
      <img src={Minus} alt="" />
    </StyledDeleteButton>
  )
}

export default CurrencyButtonDelete
