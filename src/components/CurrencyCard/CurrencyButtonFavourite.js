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
  const handleAddCurrencyToFavourieList = e => {
    const userFavouriteCurrency = userCurrencyList.filter(item => item.currencyCode === e.currentTarget.value)

    if (userFavouriteCurrencyList.find(item => item.currencyCode === e.currentTarget.value))
      alert("This currency is already on the fav list!")
    else setUserFavouriteCurrencyList([...userFavouriteCurrencyList, ...userFavouriteCurrency])
  }

  return (
    <StyledAddFavouriteButton value={currencyCode} onClick={handleAddCurrencyToFavourieList}>
      <img src={Plus} alt="" />
    </StyledAddFavouriteButton>
  )
}

export default CurrencyButtonFavourite
