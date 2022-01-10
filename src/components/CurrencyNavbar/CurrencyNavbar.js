import Logo from "../../assets/Logo.jpg"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  height: 50px;
  background-color: #2d2d37;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  width: 100px;
  border-radius: 4px 4px 0px 0px;

  & img {
    width: 3rem;
    color: white;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
  }

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
  return (
    <StyledNavbar>
      <img src={Logo} />
      <img src={Logo} />
    </StyledNavbar>
  )
}

export default CurrencyNavbar
