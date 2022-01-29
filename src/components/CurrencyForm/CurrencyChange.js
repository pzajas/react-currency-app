import { useState } from "react"

import Select from "react-select"
import styled from "styled-components"

const StyledSelect = styled(Select)`
  .select-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select-flag {
    display: flex;
    justify-content: center;

    height: 1rem;
    width: 2rem;
    border-radius: 0.1rem;

    @media (max-width: 2500px) {
      height: 2.1rem;
      width: 3rem;
    }

    @media (max-width: 1025px) {
      height: 1.8rem;
      width: 2.7rem;
    }

    @media (max-width: 750px) {
      height: 2.4rem;
      width: 4.2rem;
    }
  }
`
const StyledCode = styled.div`
  display: flex;
  align-items: center;
  width: 2rem;

  @media (max-width: 2500px) {
    height: 2.1rem;
    width: 3.5rem;

    font-size: 1rem;
  }

  @media (max-width: 768px) {
    height: 1.8rem;
    width: 3rem;

    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    width: 2.5rem;
    font-size: 0.8rem;
  }
`

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "17rem",
    height: "2.5rem",
    "&:hover": {
      color: "black",
    },
    "@media (max-width: 2500px)": {
      maxWidth: "9.6rem",
    },
    "@media (max-width: 750px)": {
      maxWidth: "8rem",
    },
    "@media (max-width: 400px)": {
      maxWidth: "7rem",
    },
  }),
  control: () => ({
    marginTop: 4,
    marginRight: 4,
    marginBottom: -2,
    border: "1px solid #2d2d37",
    backgroundColor: "#2d2d37",
    color: "white",
    boxShadow: "none",
    minHeight: 10,
    display: "flex",
    alignItems: "center",
    "@media (max-width: 2500px)": {
      minWidth: "8rem",
      maxWidth: "9.2rem",
      height: "2.5rem",
      fontSize: "1.2rem",
    },
    "@media (max-width: 750px)": {
      minWidth: "4rem",
      maxWidth: "8rem",
      height: "2.3rem",
      fontSize: "1.1rem",
    },
    "@media (max-width: 400px)": {
      minWidth: "4rem",
      maxWidth: "8rem",
      height: "2.1rem",
      fontSize: "0.9rem",
    },
  }),
  input: styles => ({
    ...styles,
    color: "white",
    maxLength: "3",
    "@media (max-width: 2500)": {
      height: "2.5rem",
      fontSize: "1.1rem",
    },
    "@media (max-width: 768px)": {
      height: "2.5rem",
      fontSize: "1rem",
    },
    "@media (max-width: 400px)": {
      height: "2.5rem",
      fontSize: "0.9rem",
    },
  }),
  dropdownIndicator: styles => ({
    ...styles,
    "&:hover": {
      border: "#2d2d37",
      color: "white",
    },
  }),
  menu: () => ({
    border: "none",
    marginRight: 4,
  }),
  menuList: styles => ({
    ...styles,
    zIndex: 9999,
    backgroundColor: "rgb(55, 55, 55)",
  }),
  singleValue: styles => ({
    ...styles,
    color: "white",
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      color: "white",
      justifyContent: "center",
      backgroundColor: "#2d2d37",
      "@media (max-width: 2400px)": {
        display: "flex",
        height: "2.2rem",
        marginBottom: 2,
        alignItems: "center",
        justifyContent: "left",
      },
      "@media (max-width: 750px)": {
        display: "flex",
        height: "2.2rem",
        marginBottom: 2,
        alignItems: "center",
        justifyContent: "left",
      },
      "@media (max-width: 400px)": {
        display: "flex",
        height: "2rem",
        marginBottom: 2,
        alignItems: "center",
        justifyContent: "left",
      },
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrencyChange = ({ currencyCountryListWithValues, baseCurrency, setBaseCurrency }) => {
  const handleSelectChange = event => {
    setBaseCurrency(event.currencyCode)
  }
  const [selectInput, setSelectInput] = useState()

  const handleSelectInputChange = characters => {
    //if (!e.key.match(/[a-zA-Z]/))
    setSelectInput(characters.toLowerCase())
  }
  return (
    <div>
      <StyledSelect
        onInputChange={handleSelectInputChange}
        onChange={handleSelectChange}
        styles={colourStyles}
        options={currencyCountryListWithValues}
        getOptionLabel={option => (
          <div className="select-option">
            {/* <img
              className="select-flag"
              alt="country flag"
              src={
                option.currencyCode === "EUR"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
                  : //   : option.currencyCode === "GBP"
                  //   ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
                  option.currencyCode === "USD"
                  ? `https://flagcdn.com/w320/us.png`
                  : option.currencyCode === "AUD"
                  ? `https://flagcdn.com/w320/au.png`
                  : option.countryFlag
              }
            /> */}
            <StyledCode className="select-code">{option.currencyCode}</StyledCode>
          </div>
        )}
        getOptionValue={option =>
          option.currencyCode.toLowerCase().includes(selectInput)
            ? option.currencyCode
            : option.currencyName.toLowerCase().includes(selectInput)
            ? option.currencyName
            : null
        }
      />
    </div>
  )
}

export default CurrencyChange
