import { useState } from "react"
import styled from "styled-components"

import CurrencyDeleteButton from "../CurrencyButtons/CurrencyDeleteButton"
import CurrencyFlag from "./CurrencyFlag"
import CurrencySymbol from "./CurrencySymbol"

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #343441;
  color: white;
  height: 40px;
  width: 100%;
  margin-bottom: 1px;
  align-items: center;
  border-radius: 2px;
  transition: all 0.4s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
    height: 60px;
    margin-bottom: 3px;
  }

  &:hover {
    background-color: #565666;
  }
`
const CurrencyCard = ({
  currencyName,
  countryFlag,
  currencyCode,
  currencySymbol,
  input,
  currencyCountryListWithValues,
  userCurrencyList,
  setUserCurrencyList,
}) => {
  const [toggleDeleteButton, setToggleDeleteButton] = useState(false)

  const currencyPriceRatioChange = currencyCountryListWithValues.find(item => item.nation === currencyCode).price
  const currencyPriceRatioCalculated = parseFloat(input * currencyPriceRatioChange).toFixed(2)

  const handleToggleDeleteButton = () => {
    setToggleDeleteButton(toggleDeleteButton === true ? false : true)
  }
  return (
    <StyledCard onClick={handleToggleDeleteButton}>
      <CurrencyFlag currencyCode={currencyCode} countryFlag={countryFlag} currencyName={currencyName}></CurrencyFlag>
      {!toggleDeleteButton ? (
        <CurrencySymbol currencyPriceRatioCalculated={currencyPriceRatioCalculated} currencySymbol={currencySymbol} />
      ) : (
        <CurrencyDeleteButton
          userCurrencyList={userCurrencyList}
          setUserCurrencyList={setUserCurrencyList}
          currencyCode={currencyCode}
        />
      )}
    </StyledCard>
  )
}

export default CurrencyCard
