import styled from "styled-components"

const Button = styled.button`
  box-sizing: border-box;
  padding: 0;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 99%;

  font-size: 15px;
  color: black;

  background-color: lightcoral;

  &:hover {
    background-color: ${({ bg }) => bg};
  }
`

const CurrencyDeleteButton = ({ userCurrencyList, setUserCurrencyList, currencyCode }) => {
  const handleRemoveFromTheList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.target.value))
  }
  return <Button bg="lightblue" value={currencyCode} onClick={handleRemoveFromTheList}></Button>
}

export default CurrencyDeleteButton
