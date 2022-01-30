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
  grid-template-rows: 50% 50%;
  box-sizing: border-box;
  background-color: #343441;
  color: white;
  border-radius: 2px;
  margin-bottom: 2px;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 2500px) {
    grid-template-columns: 6.8rem 2.4rem 13.2rem 2rem;
    height: 4.5rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 6.2rem 2.4rem 14rem 2rem;
    width: 24.5rem;
    height: 4.1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 6rem 2.4rem 13rem 2rem;
    width: 23.5rem;
    height: 3.9rem;
    font-size: 0.8rem;
  }
`

const StyledFlagContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`

const StyledCodeContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  padding-top: 0.5rem;
`

const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 0.5rem;
`

const StyledSymbolContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 0.5rem;
  padding-right: 0.5rem;
`

const StyledPriceContainer = styled.div`
  .price-container {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;

    padding-bottom: 0.5rem;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2.5rem;

  @media (max-width: 768px) {
    padding-top: 2.3rem;
  }

  @media (max-width: 400px) {
    padding-top: 2.2rem;
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
      <StyledFlagContainer>
        <CurrencyFlag currencyCode={currencyCode} countryFlag={countryFlag} currencyName={currencyName}></CurrencyFlag>
      </StyledFlagContainer>

      <StyledCodeContainer>
        <CurrencyCode currencyCode={currencyCode} currencyName={currencyName} currencySymbol={currencySymbol} />
      </StyledCodeContainer>

      <StyledNameContainer>
        <CurrencyName currencyName={currencyName} />
      </StyledNameContainer>

      {!toggleDeleteButton ? (
        <StyledSymbolContainer>
          <CurrencySymbol currencySymbol={currencySymbol} />
        </StyledSymbolContainer>
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

      <StyledPriceContainer>
        <CurrencyPrice currencyPriceRatioCalculated={currencyPriceRatioCalculated} />
      </StyledPriceContainer>

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
