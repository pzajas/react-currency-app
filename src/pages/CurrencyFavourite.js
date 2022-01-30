import CurrencyCard from "../../src/components/CurrencyCard/CurrencyCard"
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #232323;
  width: 100%;
  height: 100%;

  & li {
    box-sizing: border-box;
    padding: 0 0.24rem 0.12rem 0.24rem;
    list-style: none;
    width: 100%;
    color: white;
  }
`

const Favourite = ({ userFavouriteCurrencyList, currencyValuesListFiltered, input, setUserFavouriteCurrencyList }) => {
  return (
    <StyledListContainer>
      {userFavouriteCurrencyList.map(({ currencyCode, currencyName, currencySymbol, countryFlag }) => (
        <StyledList>
          <li>
            <CurrencyCard
              setUserFavouriteCurrencyList={setUserFavouriteCurrencyList}
              userFavouriteCurrencyList={userFavouriteCurrencyList}
              countryFlag={countryFlag}
              currencyCode={currencyCode}
              currencyName={currencyName}
              currencySymbol={currencySymbol}
              currencyValuesListFiltered={currencyValuesListFiltered}
              input={input}
            />
          </li>
        </StyledList>
      ))}
    </StyledListContainer>
  )
}

export default Favourite
