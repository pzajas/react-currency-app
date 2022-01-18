import CurrencyCard from "../components/CurrencyCard/CurrencyCard"
import styled from "styled-components"

const StyledList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #232323;
  width: 100%;
  height: 100%;

  & li {
    box-sizing: border-box;
    padding: 0px 4px 2px 4px;
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
    <div>
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
    </div>
  )
}

export default CurrencyList