import { useState } from "react"

import styled from "styled-components"

import plus from "../../assets/Plus.png"
import minus from "../../assets/Minus.png"

import CurrencyButton from "./CurrencyButton"
import CurrencyFlag from "./CurrencyFlag"
import CurrencyCode from "./CurrencyCode"
import CurrencyPrice from "./CurrencyPrice"
import CurrencyName from "./CurrencyName"
import CurrencySymbol from "./CurrencySymbol"

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.1fr 1fr;
  grid-template-rows: 50% 50%;
  box-sizing: border-box;
  background-color: #343441;
  color: white;
  width: 100%;
  margin-right: 3px;
  border-radius: 2px;

  align-items: center;

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
  }

  .container2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    padding-top: 0.5rem;
  }

  .name-container {
    display: flex;
    align-items: center;

    padding-top: 0.5rem;
  }

  .symbol-container {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 0.5rem;
    padding-right: 0.5rem;
  }

  .price-container {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;

    padding-bottom: 0.5rem;
  }
  @media (max-width: 2500px) {
    width: 100%;
    height: 4.5rem;
    margin-bottom: 3px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 4.3rem;
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 4.1rem;
    font-size: 1rem;
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 3.9rem;
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 3.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 3.5rem;
    font-size: 0.8rem;
  }
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
        <CurrencyCode currencyCode={currencyCode} currencyName={currencyName} currencySymbol={currencySymbol} />
      </div>

      <div className="name-container">
        <CurrencyName currencyName={currencyName} />
      </div>

      <div className="symbol-container">
        <CurrencySymbol currencySymbol={currencySymbol} />
      </div>

      <div className="price-container">
        <CurrencyPrice currencyPriceRatioCalculated={currencyPriceRatioCalculated} />
      </div>

      {/* <div className="container">
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
      </div> */}
    </StyledCard>
  )
}

export default CurrencyCard
