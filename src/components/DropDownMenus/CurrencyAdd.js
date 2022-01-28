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
    justify-self: start;
    height: 3rem;
    width: 5rem;
    border-radius: 0.1rem;

    @media (max-width: 750px) {
      height: 2.2rem;
      width: 3.5rem;
    }
  }

  .select-text {
    margin-right: 80px;
  }
`

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "100%",
    "&:hover": {
      color: "white",
    },
  }),
  control: () => ({
    border: "1px solid #2d2d37",
    backgroundColor: "#2d2d37",
    color: "white",
    boxShadow: "none",
    fontSize: "1.2rem",
    height: "2.5rem",
    minHeight: 10,
    display: "flex",
    alignItems: "center",
    alignText: "center",
    type: "number",
    "@media (max-width: 2500px)": {
      fontSize: "1.6rem",
    },
    "@media (max-width: 1025px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 750px)": {
      fontSize: "1.2rem",
    },
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "1.2rem",
    "@media (max-width: 2500px)": {
      height: "4rem",
    },
    "@media (max-width: 1025px)": {},
    "@media (max-width: 750px)": {
      height: "2rem",
    },
  }),

  dropdownIndicator: styles => ({
    ...styles,
    "&:hover": {
      border: "#2d2d37",
      color: "white",
    },
  }),
  menu: () => ({}),
  menuList: styles => ({
    ...styles,
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      fontSize: "1rem",
      margin: "auto",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      alignText: "center",
      backgroundColor: "#2d2d37",
      "&:hover": {
        backgroundColor: "grey",
      },
      "@media (max-width: 2500px)": {
        height: "4rem",
        fontSize: "2rem",
        marginBottom: "3px",
        marginRight: "1rem",
      },
      "@media (max-width: 1500px)": {
        height: "4rem",
        fontSize: "2rem",
        marginBottom: "3px",
        marginRight: "1rem",
      },
      "@media (max-width: 750px)": {
        fontSize: "1rem",
        height: "3rem",
        marginRight: "1rem",
      },
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrencyAdd = ({ userCurrencyList, setUserCurrencyList, currencyContinentsFiltered }) => {
  const [selectInput, setSelectInput] = useState()

  const addCurrencySelectOptions = currencyContinentsFiltered.filter(
    item => !userCurrencyList.find(({ currencyCode }) => item.currencyCode === currencyCode)
  )
  const handleAddToTheList = data => {
    const mappedUserCurrencyList = currencyContinentsFiltered.map(item => item.currencyCode)
    mappedUserCurrencyList.includes(data.currencyCode)
      ? setUserCurrencyList([
          {
            currencyCode: data.currencyCode,
            currencyName: data.currencyName,
            countryFlag: data.countryFlag,
            currencySymbol: data.currencySymbol,
            nation: data.nation,
            price: data.price,
          },
          ...userCurrencyList,
        ])
      : alert("To do: use SweetAlert")
  }

  const handleSelectInputChange = characters => {
    //if (!e.key.match(/[a-zA-Z]/))
    setSelectInput(characters.toLowerCase())
  }

  console.log(addCurrencySelectOptions)
  return (
    <div className="custom-select">
      <StyledSelect
        onInputChange={handleSelectInputChange}
        value="placeholder"
        styles={colourStyles}
        menuPlacement="auto"
        menuPosition="absolute"
        options={addCurrencySelectOptions}
        onChange={handleAddToTheList}
        getOptionValue={option =>
          option.currencyCode.toLowerCase().includes(selectInput)
            ? option.currencyCode
            : option.currencyName.toLowerCase().includes(selectInput)
            ? option.currencyName
            : null
        }
        getOptionLabel={option => (
          <div className="select-option">
            <img
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
            />
            <div>
              {option.currencyCode === "MKD"
                ? "Macedonian Denar" // ? "Danish Krone"
                : // : option.currencyCode === "NOK"
                // ? "Norwegian Krone"
                option.currencyCode === "GEL"
                ? "Georgian Lari"
                : option.currencyCode === "GMD"
                ? "Gambian Dalasi"
                : option.currencyName}
            </div>
            <div>{option.currencyCode}</div>
          </div>
        )}
      />
    </div>
  )
}
export default CurrencyAdd
