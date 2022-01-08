import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;

  @media (max-width: 750px) {
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
  @media (max-width: 1500px) {
    width: 100%;
    font-size: 2rem;
  }
  @media (max-width: 750px) {
    font-size: 0.9rem;
  }
`

const StyledSymbol = styled.div`
  display: flex;
  justify-content: center;
  width: 9.5vw;
  font-size: 14px;

  @media (max-width: 1500px) {
    width: 100%;
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    font-size: 0.9rem;
    width: 4vw;
    margin-right: 2vw;
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
