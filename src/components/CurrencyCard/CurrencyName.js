import styled from "styled-components"

const StyledContainerNames = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 1rem;
  font-size: 0.9rem;
  justify-content: left;
  /* background: green; */
`

const CurrencyName = ({ currencyCode, currencyName }) => {
  return (
    <StyledContainerNames>
      <div className="currency-three-code">{currencyCode}</div>
      <div className="full-name">
        {currencyName.split(" ").map(word => `${word[0].toUpperCase()}${word.substring(1)} `)}
      </div>
    </StyledContainerNames>
  )
}

export default CurrencyName
