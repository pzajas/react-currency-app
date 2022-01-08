import React, { useState, useEffect } from "react"

import styled from "styled-components"

const StyledNavbar = styled.nav`
  height: 50px;
  background-color: #2d2d37;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 4px 4px 0px 0px;

  @media (max-width: 2400px) {
    width: 100%;
    height: 10vh;

    font-size: 40px;
  }
  @media (max-width: 896px) {
    width: 100%;
  }
`

const CurrencyNavbar = () => {
  return <StyledNavbar></StyledNavbar>
}

export default CurrencyNavbar
