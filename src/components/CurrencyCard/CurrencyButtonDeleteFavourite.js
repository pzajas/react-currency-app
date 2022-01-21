import Minus from "../../assets/Minus.png"

import styled from "styled-components"

const StyledDeleteButtonFav = styled.button`
  width: 3rem;
  border: none;
  background-color: transparent;

  & img {
    width: 1.8rem;
    background-color: white;
  }
`

const CurrencyButtonDeleteFavourite = ({ currencyCode, userFavouriteCurrencyList, setUserFavouriteCurrencyList }) => {
  const carr = e => {
    setUserFavouriteCurrencyList(userFavouriteCurrencyList.filter(item => item.currencyCode !== e.currentTarget.value))
  }
  return (
    <StyledDeleteButtonFav value={currencyCode} onClick={carr}>
      <img src={Minus} value={currencyCode} alt="" />
    </StyledDeleteButtonFav>
  )
}

export default CurrencyButtonDeleteFavourite
