import Select from "react-select"
import styled from "styled-components"

// const StyledSelect = styled(Select)`
//   @media (max-width: 750px) {
//     width: 10rem;
//   }
// `

const StyledSelect = styled(Select)`
  .select-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select-flag {
    justify-self: start;
    height: 1rem;
    width: 2rem;
    border-radius: 0.1rem;

    @media (max-width: 750px) {
      height: 1.2rem;
      width: 2rem;
    }
  }
`

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "17rem",
    height: "20px",
    "&:hover": {
      color: "black",
    },
    "@media (max-width: 2500px)": {
      width: "25rem",
    },
    "@media (max-width: 1025px)": {
      width: "12rem",
    },
    "@media (max-width: 750px)": {
      height: "2rem",
      maxWidth: "8.4rem",
      fontSize: "1rem",
    },
  }),
  control: () => ({
    marginTop: 4,
    marginRight: 4,
    border: "1px solid #2d2d37",
    backgroundColor: "#2d2d37",
    color: "white",
    boxShadow: "none",
    fontSize: "10px",
    height: 24,
    minHeight: 10,
    display: "flex",
    alignItems: "center",
    alignText: "center",
    "@media (max-width: 2500px)": {
      height: "3rem",
      width: "24.6rem",
      fontSize: "2rem",
    },
    "@media (max-width: 1025px)": {
      height: "2.5rem",
      width: "11.6rem",
      fontSize: "1.5rem",
    },
    "@media (max-width: 750px)": {
      height: "2rem",
      minWidth: "4rem",
      maxWidth: "8rem",
      fontSize: "1rem",
    },
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "12px",
    maxLength: "3",
    "@media (max-width: 2500px)": {
      height: "44px",
      fontSize: 25,
    },
    "@media (max-width: 750px)": {
      height: "34px",
      fontSize: "1rem",
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
    marginRight: 8,
  }),
  menuList: styles => ({
    ...styles,
    zIndex: 9999,
  }),
  singleValue: styles => ({
    ...styles,
    color: "white",
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      fontSize: "10px",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      alignText: "center",
      backgroundColor: "#2d2d37",
      "&:hover": {
        backgroundColor: "grey",
      },
      "@media (max-width: 2400px)": {
        height: "44px",
        fontSize: 25,
      },
      "@media (max-width: 750px)": {
        height: "34px",
        fontSize: 16,
      },
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrencyChange = ({ currencyCountryListWithValues, baseCurrency, setBaseCurrency }) => {
  const handleSelectChange = event => {
    setBaseCurrency(event.currencyCode)
  }
  return (
    <div>
      <StyledSelect
        defaultValue={{ currencyCode: baseCurrency }}
        onChange={handleSelectChange}
        styles={colourStyles}
        options={currencyCountryListWithValues}
        getOptionLabel={option => (
          <div className="select-option">
            <img
              className="select-flag"
              alt="country flag"
              src={
                option.currencyCode === "EUR"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
                  : option.currencyCode === "GBP"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
                  : option.currencyCode === "USD"
                  ? `https://flagcdn.com/w320/us.png`
                  : option.currencyCode === "AUD"
                  ? `https://flagcdn.com/w320/au.png`
                  : option.countryFlag
              }
            />
            <div>{option.currencyCode}</div>
          </div>
        )}
        getOptionValue={option => option.currencyCode}
      />
    </div>
  )
}

export default CurrencyChange
