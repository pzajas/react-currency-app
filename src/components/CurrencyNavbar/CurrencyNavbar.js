import Logo from "../../assets/Logo.jpg"
import styled from "styled-components"

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

const CurrencyNavbar = () => {
  return (
    <StyledNavbar>
      <img src={Logo} alt="" />
    </StyledNavbar>
  )
}

export default CurrencyNavbar
