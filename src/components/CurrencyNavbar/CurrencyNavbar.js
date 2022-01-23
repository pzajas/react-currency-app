import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Logo from "../../assets/Logo2.jpg"
import CurrencyButtonPrimary from "../CurrencyButtons/CurrencyButtonPrimary"

import styled from "styled-components"

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
    //background: url("https://i.pinimg.com/564x/cf/d8/94/cfd8949e07eb56c8b744619ae47bda08.jpg");
    background-size: cover;
    background-position-x: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
    /* &::before {
      position: absolute;
      content: " ";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.8);
    } */
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
                  ? 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etz1-1451d54d-34c0-454c-9f6b-2a5b7d8e0c80.png/v1/fill/w_1280,h_1042,q_80,strp/europe_flag_map_by_lg_studio_d26etz1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0MiIsInBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXR6MS0xNDUxZDU0ZC0zNGMwLTQ1NGMtOWY2Yi0yYTViN2Q4ZTBjODAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6U-gVfjXFG4bQW-SZ5n6jWZTOIaUZYy5JgEUnyl7FMI"'
                  : counter === 3
                  ? 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26eu6r-4ac501f6-e8db-424b-b494-e653a583557f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXU2ci00YWM1MDFmNi1lOGRiLTQyNGItYjQ5NC1lNjUzYTU4MzU1N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KOsbyR46hNXFfYRd7hiCX-YP7Jtt_nyzLxXUgFvcznA"'
                  : counter === 4
                  ? 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26eu4k-0494a1a2-0024-4492-b25b-4819a1408057.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXU0ay0wNDk0YTFhMi0wMDI0LTQ0OTItYjI1Yi00ODE5YTE0MDgwNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5TWmWAv8Yn5FluIrqm41BnBLWR5iGY90DNzwxWI0cyg")'
                  : counter === 5
                  ? 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etpa-91047767-119e-4e39-a62f-bf8cb420109e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXRwYS05MTA0Nzc2Ny0xMTllLTRlMzktYTYyZi1iZjhjYjQyMDEwOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NzRi8MJd0k6-Or4rDsxi-JUkqdhxsA1ObmS0ScMXbug"'
                  : counter === 6
                  ? 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etrz-28ec09b5-b16a-499f-95c6-5a505bf139aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXRyei0yOGVjMDliNS1iMTZhLTQ5OWYtOTVjNi01YTUwNWJmMTM5YWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IkhMIly9Bn-ntNScb5GH7HeCr5MEKE8VPIS1LpxR2Pg"'
                  : 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etrz-28ec09b5-b16a-499f-95c6-5a505bf139aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXRyei0yOGVjMDliNS1iMTZhLTQ5OWYtOTVjNi01YTUwNWJmMTM5YWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IkhMIly9Bn-ntNScb5GH7HeCr5MEKE8VPIS1LpxR2Pg"'
              }`,
            }}
          >
            {/* 
EUROPE 
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etz1-1451d54d-34c0-454c-9f6b-2a5b7d8e0c80.png/v1/fill/w_1280,h_1042,q_80,strp/europe_flag_map_by_lg_studio_d26etz1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0MiIsInBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXR6MS0xNDUxZDU0ZC0zNGMwLTQ1NGMtOWY2Yi0yYTViN2Q4ZTBjODAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6U-gVfjXFG4bQW-SZ5n6jWZTOIaUZYy5JgEUnyl7FMI

ASIA
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26eu6r-4ac501f6-e8db-424b-b494-e653a583557f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXU2ci00YWM1MDFmNi1lOGRiLTQyNGItYjQ5NC1lNjUzYTU4MzU1N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KOsbyR46hNXFfYRd7hiCX-YP7Jtt_nyzLxXUgFvcznA

AFRICA
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26eu4k-0494a1a2-0024-4492-b25b-4819a1408057.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXU0ay0wNDk0YTFhMi0wMDI0LTQ0OTItYjI1Yi00ODE5YTE0MDgwNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5TWmWAv8Yn5FluIrqm41BnBLWR5iGY90DNzwxWI0cyg

US
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etpa-91047767-119e-4e39-a62f-bf8cb420109e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXRwYS05MTA0Nzc2Ny0xMTllLTRlMzktYTYyZi1iZjhjYjQyMDEwOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NzRi8MJd0k6-Or4rDsxi-JUkqdhxsA1ObmS0ScMXbug

SOUTH
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669aa10d-5db0-4983-9a66-f47db4885103/d26etrz-28ec09b5-b16a-499f-95c6-5a505bf139aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2OWFhMTBkLTVkYjAtNDk4My05YTY2LWY0N2RiNDg4NTEwM1wvZDI2ZXRyei0yOGVjMDliNS1iMTZhLTQ5OWYtOTVjNi01YTUwNWJmMTM5YWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IkhMIly9Bn-ntNScb5GH7HeCr5MEKE8VPIS1LpxR2Pg
*/}

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
