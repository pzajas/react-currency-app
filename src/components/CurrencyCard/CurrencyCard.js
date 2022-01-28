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
  border-radius: 2px;
  margin-bottom: 1px;
  align-items: center;
  font-size: 1rem;

  .flag-container {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .code-container {
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
    height: 4.5rem;
  }

  @media (max-width: 1200px) {
    height: 4.3rem;
  }

  @media (max-width: 1000px) {
    height: 4.1rem;
  }

  @media (max-width: 750px) {
    height: 3.9rem;
  }

  @media (max-width: 500px) {
    height: 3.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
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
      <div className="flag-container">
        <CurrencyFlag currencyCode={currencyCode} countryFlag={countryFlag} currencyName={currencyName}></CurrencyFlag>
      </div>

      <div className="code-container">
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
