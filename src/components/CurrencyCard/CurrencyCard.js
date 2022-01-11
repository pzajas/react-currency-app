import { useState } from "react"
import styled from "styled-components"
import CurrencyButtonDelete from "./CurrencyButtonDelete"
import CurrencyButtonFavourite from "./CurrencyButtonFavourite"

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

  @media (max-width: 2500px) {
    width: 100%;
    height: 8rem;
    margin-bottom: 3px;
  }

  @media (max-width: 1025px) {
    width: 100%;
    height: 5.6rem;
    margin-bottom: 3px;
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 4.5rem;
    margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 4.5rem;
    margin-bottom: 3px;
  }
`
const StyledButtonContainer = styled.div`
  height: 4rem;
  width: 2.6rem;
  display: flex;
  flex-direction: column;
  justify-content: right;
  // align-items: center;
`

const CurrencyCard = ({
  currencyName,
  countryFlag,
  currencyCode,
  currencySymbol,
  input,
  userCurrencyList,
  setUserCurrencyList,
  currencyValuesListFiltered,
  userFavouriteCurrencyList,
  setUserFavouriteCurrencyList,
}) => {
  const [toggleDeleteButton, setToggleDeleteButton] = useState(false)

  const currencyPriceRatioChange = currencyValuesListFiltered.find(item => item.nation === currencyCode).price
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
        <StyledButtonContainer>
          <CurrencyButtonDelete
            userCurrencyList={userCurrencyList}
            setUserCurrencyList={setUserCurrencyList}
            currencyCode={currencyCode}
          />
          <CurrencyButtonFavourite
            userCurrencyList={userCurrencyList}
            userFavouriteCurrencyList={userFavouriteCurrencyList}
            setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
            currencyCode={currencyCode}
          />
        </StyledButtonContainer>
      )}
    </StyledCard>
  )
}

export default CurrencyCard
