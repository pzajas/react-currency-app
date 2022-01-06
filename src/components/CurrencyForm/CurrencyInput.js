import styled from "styled-components"

const StyledInput = styled.input`
  margin: 4px;
  width: 72%;
  height: 20px;
  font-size: 12px;

  @media (max-width: 750px) {
    height: 30px;
    font-size: 17px;
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
  return <StyledInput placeholder="Enter the amount to convert..." value={input} onChange={handleInputChange} />
}

export default CurrencyInput
