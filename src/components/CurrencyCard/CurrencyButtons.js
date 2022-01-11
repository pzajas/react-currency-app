import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"

const StyledFontAwesomeContainer = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  width: 50px;
  justify-content: space-between;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 1.5rem;
`

const CurrencyButtons = ({ currencyCode, userCurrencyList, setUserCurrencyList }) => {
  const handleDeleteCurrencyFromTheUserList = e => {
    setUserCurrencyList(userCurrencyList.filter(item => item.currencyCode !== e.currentTarget.value))
  }
  return (
    <div>
      <div>
        <StyledFontAwesomeContainer value={currencyCode} onClick={handleDeleteCurrencyFromTheUserList}>
          <StyledFontAwesomeIcon value={currencyCode} icon={faMinusSquare} />
        </StyledFontAwesomeContainer>
      </div>
      <div>
        <StyledFontAwesomeContainer value={currencyCode}>
          <StyledFontAwesomeIcon value={currencyCode} icon={faPlusSquare} />
        </StyledFontAwesomeContainer>
      </div>
    </div>
  )
}

export default CurrencyButtons
