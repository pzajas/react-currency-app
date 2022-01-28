import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    display: flex;
  }

  @media (max-width: 400px) {
    display: flex;
  }
`

const CurrencyPrice = ({ currencyPriceRatioCalculated }) => {
  return (
    <StyledContainer>
      <div>{currencyPriceRatioCalculated}</div>
    </StyledContainer>
  )
}

export default CurrencyPrice
