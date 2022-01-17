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
    color: white;
  }
`

const Favourite = ({ userFavouriteCurrencyList }) => {
  return (
    <StyledList>
      {userFavouriteCurrencyList.map(({ currencyCode }) => (
        <li>{currencyCode}</li>
      ))}
    </StyledList>
  )
}

export default Favourite
