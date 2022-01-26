import styled from "styled-components"

const StyledInput = styled.input`
  margin: 4px;
  width: 70%;
  height: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 0rem;

  @media (max-width: 2500px) {
    height: 3rem;
    width: 90%;
    font-size: 2rem;
  }

  @media (max-width: 1025px) {
    height: 2.5rem;
    width: 85%;
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    height: 2.5rem;
    width: 80%;
    font-size: 1.5rem;
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
