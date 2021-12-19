import React from "react"
import Select from "react-select"

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
      color: "white",
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
        getOptionLabel={option => option.currency}
        getOptionValue={option => option.country}
      />
    </div>
  )
}

export default CurrencyAdd
