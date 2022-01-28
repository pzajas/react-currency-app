import styled from "styled-components"

const StyledInput = styled.input`
  margin: 0.25rem;
  font-size: 1.2rem;

  border: none;
  @media (max-width: 2500px) {
    height: 2.5rem;
    width: 90%;
  }

  @media (max-width: 1025px) {
    height: 2.5rem;
    width: 85%;
  }

  @media (max-width: 750px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 80%;
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
