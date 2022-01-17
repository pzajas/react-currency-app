import Logo from "../../assets/Logo.jpg"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faQuestionCircle, faHeart, faDotCircle } from "@fortawesome/free-solid-svg-icons"

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
  padding-right: 0.5rem;

  padding-top: 0.5rem;
  background-color: #2d2d37;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
`

const CurrencyNavbar = () => {
  return (
    <StyledContainer>
      <StyledNavbar>
        <img src={Logo} alt="" />

        <StyledLinkContainer>
          <StyledLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </StyledLink>
          <StyledLink to="/favourites">
            <FontAwesomeIcon icon={faDotCircle} />
          </StyledLink>
          <StyledLink to="/favourites">
            <FontAwesomeIcon icon={faHeart} />
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
