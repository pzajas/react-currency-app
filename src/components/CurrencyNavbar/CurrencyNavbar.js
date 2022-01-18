import React, { useState, useEffect } from "react"

import Logo from "../../assets/Logo.jpg"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlobe,
  faGlobeEurope,
  faGlobeAsia,
  faGlobeAfrica,
  faGlobeAmericas,
  faQuestionCircle,
  faGrinHearts,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledNavbar = styled.nav`
  height: 50px;
  background-color: #2d2d37;
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 500;
  width: 100px;
  border-radius: 4px 4px 0px 0px;

  @media (max-width: 2500px) {
    width: 100%;
    height: 8rem;
    font-size: 40px;
  }

  @media (max-width: 1025px) {
    width: 100%;
    height: 5.6rem;
  }

  @media (max-width: 750px) {
    height: 4.5rem;
    width: 100%;

    & img {
      width: 7rem;
      margin-left: 0.5rem;
      border-radius: 50%;
    }
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: top;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  background-color: #2d2d37;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`

const CurrencyNavbar = ({
  currencyCountryListWithValues,
  setCurrencyContinentsFiltered,
  currencyContinentsFiltered,
}) => {
  const [counter, setCounter] = useState(1)
  const filterValues = ["World", "Europe", "Asia", "Africa", "North America", "South America"]

  const handleFilterContinents = () => {
    setCounter(counter + 1)

    setCurrencyContinentsFiltered(
      filterValues[counter] === "World"
        ? currencyCountryListWithValues
        : currencyCountryListWithValues.filter(
            item => item.currencyContinent === filterValues[counter] || item.currencyCode === "EUR"
          )
    )
    if (counter >= 5) setCounter(0)
  }

  console.log(currencyContinentsFiltered)
  return (
    <StyledContainer>
      <StyledNavbar>
        <img src={Logo} alt="" />
        <StyledLinkContainer>
          <StyledLink to="/">
            <FontAwesomeIcon icon={faUserCircle} />
          </StyledLink>
          <StyledLink to="/favourites">
            <FontAwesomeIcon icon={faGrinHearts} />
          </StyledLink>
          <StyledLink to="/">
            <FontAwesomeIcon
              onClick={handleFilterContinents}
              icon={
                counter === 1
                  ? faGlobe
                  : counter === 2
                  ? faGlobeEurope
                  : counter === 3
                  ? faGlobeAsia
                  : counter === 4
                  ? faGlobeAfrica
                  : counter === 5
                  ? faGlobeAmericas
                  : faGlobeAmericas
              }
            />
          </StyledLink>
          <StyledLink to="/about">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </StyledLink>
        </StyledLinkContainer>
      </StyledNavbar>
    </StyledContainer>
  )
}

export default CurrencyNavbar
