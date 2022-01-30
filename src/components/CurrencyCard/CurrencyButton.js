import Plus from "../../assets/Plus.png"
import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  & img {
    width: 1.5rem;
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
