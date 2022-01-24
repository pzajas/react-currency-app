import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 0.1rem;
  height: 2.5rem;
  width: 14rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 750px) {
    background-color: white;
    color: black;
    font-size: 2rem;
    &:hover {
      color: black;
    }
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
