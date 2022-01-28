import styled from "styled-components"

const StyledFlag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  font-size: 18px;

  & img {
    height: 30px;
    width: 45px;
    margin: 0px 4px 0px 4px;
    border-radius: 0.3rem;
  }

  @media (max-width: 2500px) {
    width: 100%;
    font-size: 2rem;

    & img {
      height: 4rem;
      width: 5.5rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8;

    & img {
      height: 3.8rem;
      width: 5.3rem;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8;

    & img {
      height: 3.6rem;
      width: 5.1rem;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8;

    & img {
      height: 3.4rem;
      width: 4.9rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8;

    & img {
      height: 3.2rem;
      width: 4.7rem;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8;

    & img {
      height: 3rem;
      width: 4.5rem;
    }
  }
`

const CurrencyFlag = ({ currencyCode, countryFlag, currencyName }) => {
  const EU_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png`
  const UK_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png`
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
