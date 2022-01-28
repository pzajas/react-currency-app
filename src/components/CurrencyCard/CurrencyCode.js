import styled from "styled-components"

const StyledContainerNames = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 1rem;

  justify-content: space-between;
  padding-right: 4px;
  color: lightsalmon;
`

const CurrencyCode = ({ currencyCode }) => {
  return (
    <StyledContainerNames>
      <div className="currency-three-code">{currencyCode}</div>
    </StyledContainerNames>
  )
}

export default CurrencyCode
