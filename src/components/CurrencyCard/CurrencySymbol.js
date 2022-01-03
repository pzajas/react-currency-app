import styled from "styled-components"

const StyledSymbol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 50px;

  & div {
    font-size: 11px;
    width: 100px;
    margin: 0px 14px 0px 8px;
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
