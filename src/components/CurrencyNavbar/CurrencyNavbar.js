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
    margin: 2rem 1.5rem 2rem 2rem;
    cursor: pointer;
  }

  * {
    transition: all 0.5s linear;
  }
`

const StyledNavbar = styled.nav`
  background-color: #2d2d37;
  color: black;
  display: flex;
  justify-content: right;
  font-weight: 500;
  border-radius: 4px 4px 0px 0px;
  transition: all 0.5s linear;

  .test:hover {
    transform: rotate(360deg);
  }

  @media (max-width: 2500px) {
    width: 100%;
    height: 4.7rem;
    font-size: 40px;

    .test {
      align-items: center;
      font-size: 3rem;
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 25rem;
    height: 4.2rem;

    .test {
      align-items: center;
      font-size: 2.5rem;
      color: white;
    }
  }

  @media (max-width: 400px) {
    width: 24rem;
    height: 4rem;
    font-size: 0.5rem;

    .test {
      font-size: 2rem;
      color: white;
    }
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding-top: 4.87rem;
  position: absolute;
  z-index: 1000;
  background-size: cover;
  background-position-x: center;
  background-color: #181818;
  background-blend-mode: darken;
  height: 40%;
  position: fixed;
`

const StyledLink = styled(Link)`
  text-decoration: none;
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
          // style={{
          //   backgroundImage: `${
          //     counter === 1
          //       ? 'url("https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag-map_of_the_world_%282018%29.png")'
          //       : counter === 2
          //       ? `url(${Europe})`
          //       : counter === 3
          //       ? `url(${Asia})`
          //       : counter === 4
          //       ? `url(${Africa})`
          //       : counter === 5
          //       ? `url(${NorthAmerica})`
          //       : `url(${SouthAmerica})`
          //   }`,
          // }}
          >
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
                value={`Filter: ${countryNameOnButton}`}
              ></CurrencyButtonPrimary>
            </StyledLink>
          </StyledLinkContainer>
        </StyledNavbar>
      ) : (
        <StyledNavbar>
          <div className="test" onClick={handleToggleBurgerMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </StyledNavbar>
      )}
    </StyledContainer>
  )
}

export default CurrencyNavbar
