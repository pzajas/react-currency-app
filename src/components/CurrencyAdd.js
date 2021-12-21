import { findByLabelText } from "@testing-library/react"
import React from "react"
import Select from "react-select"

import "./CurrencyAdd.css"

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "300px",
    margin: "auto",
    "&:hover": {
      color: "white",
    },
  }),
  control: () => ({
    border: "1px solid #2d2d37",
    backgroundColor: "#2d2d37",
    color: "white",
    borderRadius: "0px 0px 4px 4px",
    boxShadow: "none",
    "&:hover": {},
    fontSize: "10px",
    height: 30,
    minHeight: 10,
    display: "flex",
    alignItems: "center",
    alignText: "center",
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
  menu: () => ({}),
  menuList: styles => ({
    ...styles,
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      margin: "auto",
      fontSize: "15px",
      margin: "auto",
      color: "white",
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
