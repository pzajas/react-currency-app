import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 0.1rem;
  height: 1.5rem;
  cursor: pointer;

  @media (max-width: 750px) {
    background-color: transparent;
    color: #eee;
    font-size: 2rem;
    &:hover {
      color: white;
      /* font-size: 2.2rem; */
      border: 1px solid white;
      height: 4rem;
    }
  }
`

const CurrencyButtonPrimary = ({ value, onClick }) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default CurrencyButtonPrimary
