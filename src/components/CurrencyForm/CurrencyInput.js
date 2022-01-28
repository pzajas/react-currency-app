import styled from "styled-components"

const StyledInput = styled.input`
  margin: 4px;
  width: 70%;
  height: 20px;
  font-size: 1.2rem;

  border: none;
  border-radius: 0rem;

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
    <StyledInput
      type="number"
      placeholder="Enter the amount to convert..."
      value={input}
      onChange={handleInputChange}
    />
  )
}
export default CurrencyInput
