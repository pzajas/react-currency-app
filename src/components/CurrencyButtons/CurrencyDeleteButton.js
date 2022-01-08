import styled from "styled-components"

const CurrencyDeletButton = styled.button`
  box-sizing: border-box;
  padding: 0;
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10px;
  height: 99%;

  font-size: 10px;
  color: black;

  background-color: lightcoral;

  @media (max-width: 2400px) {
    margin: 4px;
    height: 7vh;
    width: 5vw;
  }

  @media (max-width: 896px) {
    margin: 4px;
    height: 7vh;
    width: 10vw;
  }

  &:hover {
    background-color: ${({ bg }) => bg};
  }
`

const CurrencyDeleteButton = ({ userCurrencyList, setUserCurrencyList, currencyCode }) => {
  const handleRemoveFromTheList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.target.value))
  }
  return (
    <CurrencyDeletButton bg="lightblue" value={currencyCode} onClick={handleRemoveFromTheList}></CurrencyDeletButton>
  )
}

export default CurrencyDeleteButton
