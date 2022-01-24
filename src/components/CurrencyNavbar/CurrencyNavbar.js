import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import CurrencyButtonPrimary from "../CurrencyButtons/CurrencyButtonPrimary"

import Europe from "../../assets/Europe.jpg"
import Asia from "../../assets/Asia.png"
import Africa from "../../assets/Africa.png"
import NorthAmerica from "../../assets/North_America.png"
import SouthAmerica from "../../assets/South_America.png"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  .test {
    display: flex;
    justify-content: right;
    z-index: 1001;
    cursor: pointer;
  }

  * {
    transition: all 0.5s linear;
  }
`

const StyledNavbar = styled.nav`
  height: 50px;
  background-color: #2d2d37;
  color: black;
  display: flex;
  justify-content: right;
  font-weight: 500;
  width: 100px;
  border-radius: 4px 4px 0px 0px;
  transition: all 0.5s linear;

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
    transition: all 0.5s linear;

    & img {
      width: 7rem;
      align-items: center;
      overflow: hidden;
      margin-left: 0.5rem;
      border-radius: 50%;

      z-index: 1001;
    }

    .test {
      margin: 1rem 1rem 1rem 1rem;
      color: white;
    }
    .test:hover {
      transform: rotate(360deg);
    }
  }
`

const StyledLinkContainer = styled.div`
  height: 20rem;
  width: 20rem;
  left: 0;
  right: 0;

  @media (max-width: 750px) {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1000;
    left: 0;
    right: 0;
    background-size: cover;
    background-position-x: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`

const CurrencyNavbar = ({ currencyCountryListWithValues, setCurrencyContinentsFiltered }) => {
  const [counter, setCounter] = useState(1)
  const [countryNameOnButton, setCountryNameOnButton] = useState("World")
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false)
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
    setCountryNameOnButton(filterValues[counter])
    if (counter >= 5) setCounter(0)
  }

  const handleToggleBurgerMenu = () => {
    setToggleBurgerMenu(!toggleBurgerMenu)
  }
  return (
    <StyledContainer>
      {toggleBurgerMenu === true ? (
        <StyledNavbar>
          <div className="test" onClick={handleToggleBurgerMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <StyledLinkContainer
            style={{
              backgroundImage: `${
                counter === 1
                  ? 'url("https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag-map_of_the_world_%282018%29.png")'
                  : counter === 2
                  ? `url(${Europe})`
                  : counter === 3
                  ? `url(${Asia})`
                  : counter === 4
                  ? `url(${Africa})`
                  : counter === 5
                  ? `url(${NorthAmerica})`
                  : `url(${SouthAmerica})`
              }`,
            }}
          >
            <div></div>
            <StyledLink onClick={handleToggleBurgerMenu} to="/">
              <CurrencyButtonPrimary value="Currency" />
            </StyledLink>
            <StyledLink onClick={handleToggleBurgerMenu} to="/favourites">
              <CurrencyButtonPrimary value="Favourite" />
            </StyledLink>
            <StyledLink onClick={handleToggleBurgerMenu} to="/about">
              <CurrencyButtonPrimary value="About" />
            </StyledLink>
            <StyledLink to="/">
              <CurrencyButtonPrimary
                onClick={handleFilterContinents}
                value={countryNameOnButton}
              ></CurrencyButtonPrimary>
            </StyledLink>
          </StyledLinkContainer>
        </StyledNavbar>
      ) : (
        <StyledNavbar>
          <div className="test" onClick={handleToggleBurgerMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="bcg"></div>
        </StyledNavbar>
      )}
    </StyledContainer>
  )
}

export default CurrencyNavbar
