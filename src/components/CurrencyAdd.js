import React from "react"
import Select from "react-select"

import "./CurrencyAdd.css"

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "300px",
    margin: "auto",
    "&:hover": {
      color: "black",
    },
  }),
  control: base => ({
    ...base,
    border: "1px solid black",
    backgroundColor: "#2d2d37",
    color: "white",
    borderRadius: "0px 0px 4px 4px",
    boxShadow: "none",
    "&:hover": {
      border: "#2d2d37",
    },
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "15px",
  }),
  dropdownIndicator: styles => ({
    ...styles,
    "&:hover": {
      border: "#2d2d37",
      color: "white",
    },
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      margin: "auto",
      fontSize: "15px",
      margin: "auto",
      color: "white",
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignText: "center",
      backgroundColor: "#2d2d37",
      "&:hover": {
        backgroundColor: "grey",
      },
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrencyAdd = ({ addCurrencySelectOptions, handleAddToTheList }) => {
  return (
    <div className="custom-select">
      <Select
        value="placeholder"
        styles={colourStyles}
        options={addCurrencySelectOptions}
        onChange={handleAddToTheList}
        getOptionValue={option => option.country}
        getOptionLabel={option => (
          <div className="select-option">
            <img
              className="select-flag"
              alt="country flag"
              height="20px"
              width="30px"
              src={`https://flagpedia.net/data/flags/w580/${option.country}.png`}
            />
            <div className="select-text">{option.currency}</div>
          </div>
        )}
      />
    </div>
  )
}

export default CurrencyAdd
