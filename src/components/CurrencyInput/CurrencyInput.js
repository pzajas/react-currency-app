const CurrencyInput = ({ input, setInput }) => {
  const handleInputChange = event => {
    const num = event.target.value

    setInput(num.replace(/[^\d.]/g, ""))
  }
  return (
    <input
      placeholder="Enter the amount to convert..."
      className="currency-input"
      value={input}
      onChange={handleInputChange}
    />
  )
}

export default CurrencyInput
