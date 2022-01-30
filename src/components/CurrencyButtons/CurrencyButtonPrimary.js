import styled from "styled-components"

const StyledButton = styled.button`
  background: none;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1.5rem;
  border: none;
  color: white;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid salmon;
  }

  @media (max-width: 2500px) {
    height: 3rem;
    width: 18rem;
    font-size: 1.2rem;
  }

  @media (max-width: 750px) {
    height: 2.5rem;
    width: 14rem;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    height: 2.5rem;
    width: 14rem;
    font-size: 1rem;
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
