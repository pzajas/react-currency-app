import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 0.1rem;
  height: 1.5rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 750px) {
    background-color: transparent;
    color: white;
    font-size: 2rem;
    &:hover {
      color: white;
    }
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
