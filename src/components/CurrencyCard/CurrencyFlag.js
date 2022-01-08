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
    border-radius: 2px;
  }

  @media (max-width: 1500px) {
    width: 100%;
    font-size: 2rem;

    & img {
      height: 7rem;
      width: 10rem;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    font-size: 0.9rem;

    & img {
      height: 4rem;
      width: 6rem;
    }
  }
`

const CurrencyFlag = ({ currencyCode, countryFlag, currencyName }) => {
  const EU_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png`
  const UK_FLAG = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png`
  return (
    <StyledFlag>
      <img alt="country flag" src={currencyCode === "EUR" ? EU_FLAG : currencyCode === "GBP" ? UK_FLAG : countryFlag} />
      <div>
        <div className="currency-three-code">{currencyCode}</div>
        <div className="full-name">
          {currencyName.split(" ").map(word => `${word[0].toUpperCase()}${word.substring(1)} `)}
        </div>
      </div>
    </StyledFlag>
  )
}

export default CurrencyFlag
