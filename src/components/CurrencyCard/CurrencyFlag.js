import styled from "styled-components"

const StyledFlag = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 0rem 0.25rem 0rem 0.25rem;
    border-radius: 0.3rem;
  }
  @media (max-width: 2500px) {
    img {
      height: 4rem;
      width: 5.5rem;
    }
  }
  @media (max-width: 1200px) {
    img {
      height: 3.8rem;
      width: 5.3rem;
    }
  }
  @media (max-width: 1000px) {
    img {
      height: 3.6rem;
      width: 5.1rem;
    }
  }
  @media (max-width: 750px) {
    & img {
      height: 3.4rem;
      width: 4.9rem;
    }
  }
  @media (max-width: 500px) {
    img {
      height: 3.2rem;
      width: 4.7rem;
    }
  }
  @media (max-width: 400px) {
    img {
      height: 3rem;
      width: 4.5rem;
    }
  }
`

const CurrencyFlag = ({ currencyCode, countryFlag }) => {
  const EU_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png`
  const US_FLAG = `https://flagcdn.com/w320/us.png`
  const AU_FLAG = `https://flagcdn.com/w320/au.png`
  return (
    <StyledFlag>
      <img
        alt="country flag"
        src={
          currencyCode === "EUR"
            ? EU_FLAG
            : currencyCode === "USD"
            ? US_FLAG
            : currencyCode === "AUD"
            ? AU_FLAG
            : countryFlag
        }
      />
    </StyledFlag>
  )
}

export default CurrencyFlag
