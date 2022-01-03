import CurrencyInput from "./CurrencyInput"
import CurrencyChange from "./CurrencyChange"

import styled from "styled-components"

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  background-color: #232323;
`

const CurrencyForm = ({
  input,
  setInput,
  baseCurrency,
  setBaseCurrency,
  userCurrencyList,
  currencyCountryListWithValues,
}) => {
  return (
    <StyledForm>
      <CurrencyInput value={input} setInput={setInput} />
      <CurrencyChange
        userCurrencyList={userCurrencyList}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        currencyCountryListWithValues={currencyCountryListWithValues}
      />
    </StyledForm>
  )
}

export default CurrencyForm
