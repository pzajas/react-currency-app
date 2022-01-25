import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 0.1rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 2500px) {
    height: 3rem;
    width: 18rem;
    background-color: white;
    color: black;
    font-size: 2rem;
    &:hover {
      color: black;
    }
  }

  @media (max-width: 1025px) {
    height: 3rem;
    width: 16rem;
    background-color: white;
    color: black;
    font-size: 2rem;
    &:hover {
      color: black;
    }
  }

  @media (max-width: 750px) {
    background-color: white;
    height: 2.5rem;
    width: 14rem;
    color: black;
    font-size: 1.5rem;
    &:hover {
      color: black;
    }
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
