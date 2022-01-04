import React, { useState, useEffect } from "react"

import styled from "styled-components"

const StyledCurrencyFilter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2d2d37;
  margin: 3px 4px 0px 4px;
`
const StyledButton = styled.button`
  border: 1px solid white;
  margin: 1px;
  font-size: 8px;
  color: white;
  background-color: #232323;
`

const CurrencyFilter = ({ currencyCountryListWithValues, setCurrencyContinentsFiltered }) => {
  const filterValues = ["World", "Europe", "Africa", "Asia", "North America", "South America"]

  const filterCurrencyByContinent = e => {
    setCurrencyContinentsFiltered(
      e.target.value === "World"
        ? currencyCountryListWithValues
        : currencyCountryListWithValues.filter(item =>
            item.currencyContinent === e.target.value || item.currencyContinent === "Antarctica" ? item : null
          )
    )
  }
  return (
    <StyledCurrencyFilter>
      {filterValues.map(item => (
        <StyledButton value={item} onClick={filterCurrencyByContinent}>
          {item}
        </StyledButton>
      ))}
    </StyledCurrencyFilter>
  )
}

export default CurrencyFilter
