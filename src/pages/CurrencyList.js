import CurrencyCard from "../components/CurrencyCard/CurrencyCard"
import styled from "styled-components"

const StyledListContainer = styled.div`
  display: grid;
  grid-template-columns: 25rem 25rem;

  @media (max-width: 768px) {
    grid-template-columns: 25rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 24rem;
  }
`

const StyledList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  background-color: #232323;
  width: 100%;
  height: 100%;

  & li {
    box-sizing: border-box;
    padding: 0 0.24rem 0.12rem 0.24rem;
    list-style: none;
    width: 100%;
  }
`

const CurrencyList = ({
  baseCurrency,
  input,
  userCurrencyList,
  setUserCurrencyList,
  userFavouriteCurrencyList,
  setUserFavouriteCurrencyList,
  currencyValuesListFiltered,
}) => {
  return (
    <StyledListContainer>
      {userCurrencyList.map(({ currencyCode, currencyName, currencySymbol, countryFlag }) => (
        <StyledList key={currencyCode}>
          <li>
            <CurrencyCard
              countryFlag={countryFlag}
              currencyCode={currencyCode}
              currencyName={currencyName}
              currencySymbol={currencySymbol}
              input={input}
              currencyValuesListFiltered={currencyValuesListFiltered}
              baseCurrency={baseCurrency}
              userCurrencyList={userCurrencyList}
              setUserCurrencyList={setUserCurrencyList}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
            />
          </li>
        </StyledList>
      ))}
    </StyledListContainer>
  )
}

export default CurrencyList
