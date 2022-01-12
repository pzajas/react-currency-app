import Plus from "../../assets/Plus.png"

import styled from "styled-components"

const StyledAddFavouriteButton = styled.button`
  width: 3rem;
  border: none;
  background-color: transparent;

  & img {
    width: 1.8rem;
    background-color: white;
  }
`

const CurrencyButtonFavourite = ({
  userCurrencyList,
  currencyCode,
  userFavouriteCurrencyList,
  setUserFavouriteCurrencyList,
}) => {
  const handleX = e => {
    const xxx = userCurrencyList.filter(item => item.currencyCode === e.currentTarget.value)
    setUserFavouriteCurrencyList([...userFavouriteCurrencyList, ...xxx])
  }

  return (
    <StyledAddFavouriteButton value={currencyCode} onClick={handleX}>
      <img src={Plus} alt="" />
    </StyledAddFavouriteButton>
  )
}

export default CurrencyButtonFavourite
