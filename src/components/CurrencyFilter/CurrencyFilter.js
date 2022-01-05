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
  border-radius: 1px;

  @media (max-width: 750px) {
    width: 80%;
  }
`

const CurrencyFilter = ({ currencyCountryListWithValues, setCurrencyContinentsFiltered }) => {
  const filterValues = [
    { id: Math.random() * 1000, continent: "World" },
    { id: Math.random() * 1000, continent: "Europe" },
    { id: Math.random() * 1000, continent: "Asia" },
    { id: Math.random() * 1000, continent: "Africa" },
    { id: Math.random() * 1000, continent: "North America" },
    { id: Math.random() * 1000, continent: "South America" },
  ]

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
        <StyledButton value={item.continent} onClick={filterCurrencyByContinent}>
          {item.continent}
        </StyledButton>
      ))}
    </StyledCurrencyFilter>
  )
}

export default CurrencyFilter
