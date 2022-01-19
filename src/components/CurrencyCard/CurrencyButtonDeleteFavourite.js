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

const CurrencyButtonDeleteFavourite = ({
  yyy,
  currencyCode,
  userFavouriteCurrencyList,
  setUserFavouriteCurrencyList,
}) => {
  const carr = e => {
    //setUserFavouriteCurrencyList(yyy.filter(item => item.currencyCode !== e.currentTarget.value))
    console.log(yyy.find(item => item.currencyCode === "AUD"))
  }
  return (
    <StyledDeleteButtonFav value={currencyCode} onClick={carr}>
      <img src={Minus} alt="" />
    </StyledDeleteButtonFav>
  )
}

export default CurrencyButtonDeleteFavourite
