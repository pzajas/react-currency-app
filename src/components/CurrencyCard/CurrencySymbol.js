import styled from "styled-components"

const StyledSymbol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & div {
    font-size: 11px;
    margin: 0px 4px 0px 15px;
    width: 20px;
    //justify-content: center;
  }
`

const CurrencySymbol = ({ currencySymbol, currencyPriceRatioCalculated }) => {
  return (
    <StyledSymbol>
      <div>{currencyPriceRatioCalculated}</div>
      <div>{`${currencySymbol[0].toUpperCase()}${currencySymbol.substring(1, 2)}`}</div>
    </StyledSymbol>
  )
}

export default CurrencySymbol
