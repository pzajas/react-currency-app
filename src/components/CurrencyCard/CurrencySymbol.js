import styled from "styled-components"

const StyledContainer = styled.div`
  @media (max-width: 896px) {
    display: flex;
    font-size: 16px;
  }

  @media (max-width: 400px) {
    display: flex;
  }
`
const StyledCurrency = styled.div`
  font-size: 14px;
  margin-right: 3vw;

  @media (max-width: 896px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`

const StyledSymbol = styled.div`
  display: flex;
  justify-content: center;
  width: 9.5vw;
  font-size: 14px;

  @media (max-width: 896px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`

const CurrencySymbol = ({ currencySymbol, currencyPriceRatioCalculated }) => {
  return (
    <StyledContainer>
      <StyledCurrency>{currencyPriceRatioCalculated}</StyledCurrency>
      <StyledSymbol>{`${currencySymbol[0].toUpperCase()}${currencySymbol.substring(1, 2)}`}</StyledSymbol>
    </StyledContainer>
  )
}

export default CurrencySymbol
