import Plus from "../../assets/Plus.png"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 3rem;
  border: none;
  background-color: transparent;

  & img {
    width: 1.8rem;
    background-color: white;
  }
`

const CurrencyButtonFavourite = ({ currencyCode, plusMinusSign, onClick }) => {
  return (
    <StyledButton value={currencyCode} onClick={onClick}>
      <img src={plusMinusSign} alt="" />
    </StyledButton>
  )
}

export default CurrencyButtonFavourite
