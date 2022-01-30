import styled from "styled-components"

const StyledButton = styled.button`
  background: none;
  border: none;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid salmon;
  }

  @media (max-width: 2500px) {
    height: 3rem;
    width: 18rem;
    color: black;
    font-size: 2rem;
    &:hover {
      color: black;
    }
  }

  @media (max-width: 750px) {
    height: 2.5rem;
    width: 14rem;
    color: black;
    font-size: 1.5rem;
    &:hover {
      color: black;
    }
  }

  @media (max-width: 400px) {
    height: 2.5rem;
    width: 14rem;
    color: whitesmoke;
    font-size: 1rem;

    &:hover {
      border-bottom: 2px solid salmon;
    }
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
