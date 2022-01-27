import { useState } from "react"

import styled from "styled-components"

import plus from "../../assets/Plus.png"
import minus from "../../assets/Minus.png"

import CurrencyButton from "./CurrencyButton"
import CurrencyFlag from "./CurrencyFlag"
import CurrencySymbol from "./CurrencySymbol"
import CurrencyName from "./CurrencyName"

const StyledCard = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-direction: row; */

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 36px 36px;
  box-sizing: border-box;
  background-color: #343441;
  color: white;
  width: 100%;
  margin-right: 3px;
  border-radius: 2px;
  /* height: 2rem; */

  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: top;
    background: green;
  }

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
    //margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 4.5rem;
  }
`
const StyledButtonContainer = styled.div``

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

  const currencyPriceRatioChange = currencyValuesListFiltered.find(item => item.nation === currencyCode)?.price
  const currencyPriceRatioCalculated = parseFloat(input * currencyPriceRatioChange).toFixed(2)

  const handleToggleDeleteButton = () => {
    setToggleDeleteButton(toggleDeleteButton === true ? false : true)
  }

  const handleAddCurrencyToFavourieList = e => {
    const userFavouriteCurrency = userCurrencyList.filter(item => item.currencyCode === e.currentTarget.value)

    if (userFavouriteCurrencyList.find(item => item.currencyCode === e.currentTarget.value))
      alert("This currency is already on the fav list!")
    else setUserFavouriteCurrencyList([...userFavouriteCurrencyList, ...userFavouriteCurrency])
  }

  const handleDeleteCurrencyFromTheUserList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.currentTarget.value))
  }

  const handleDeleteCurrencyFromTheFavouritesList = e => {
    setUserFavouriteCurrencyList(userFavouriteCurrencyList.filter(item => item.currencyCode !== e.currentTarget.value))
  }

  return (
    <StyledCard onClick={handleToggleDeleteButton}>
      <div className="flag">
        <CurrencyFlag currencyCode={currencyCode} countryFlag={countryFlag} currencyName={currencyName}></CurrencyFlag>
      </div>

      <div className="container2">
        <CurrencyName currencyCode={currencyCode} currencyName={currencyName} />
      </div>

      <div className="container">
        {!toggleDeleteButton ? (
          <CurrencySymbol
            className="CurrencySymbol"
            currencyPriceRatioCalculated={currencyPriceRatioCalculated}
            currencySymbol={currencySymbol}
          />
        ) : userCurrencyList ? (
          <StyledButtonContainer>
            <CurrencyButton
              plusMinusSign={minus}
              onClick={handleDeleteCurrencyFromTheUserList}
              userCurrencyList={userCurrencyList}
              setUserCurrencyList={setUserCurrencyList}
              currencyCode={currencyCode}
            />
            <CurrencyButton
              plusMinusSign={plus}
              onClick={handleAddCurrencyToFavourieList}
              userCurrencyList={userCurrencyList}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
              currencyCode={currencyCode}
            />
          </StyledButtonContainer>
        ) : (
          <StyledButtonContainer>
            <CurrencyButton
              plusMinusSign={minus}
              onClick={handleDeleteCurrencyFromTheFavouritesList}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
              currencyCode={currencyCode}
            />
          </StyledButtonContainer>
        )}
      </div>
    </StyledCard>
  )
}

export default CurrencyCard
