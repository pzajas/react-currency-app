import styled from "styled-components"

const StyledInput = styled.input`
  margin: 0.25rem;

  border: none;
  @media (max-width: 2500px) {
    height: 2.5rem;
    width: 90%;
    font-size: 1.2rem;
  }

  @media (max-width: 750px) {
    height: 2.3rem;
    width: 80%;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    height: 2.1rem;
    width: 80%;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
  }
`

const CurrencyInput = ({ input, setInput }) => {
  const handleInputChange = event => {
    const num = event.target.value

    setInput(num.replace(/[^\d.]/g, ""))
  }

  return (
    <StyledInput type="number" placeholder="Type the amount to convert..." value={input} onChange={handleInputChange} />
  )
}
export default CurrencyInput
