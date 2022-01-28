import styled from "styled-components"

const StyledContainerNames = styled.div`
  padding-right: 4px;
  color: lightsalmon;
`

const CurrencyCode = ({ currencyCode }) => {
  return (
    <StyledContainerNames>
      <div>{currencyCode}</div>
    </StyledContainerNames>
  )
}

export default CurrencyCode
