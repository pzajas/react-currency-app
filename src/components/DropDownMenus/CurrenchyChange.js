import React from "react"
import Select from "react-select"

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "100px",
    height: "20px",
    "&:hover": {
      color: "black",
    },
  }),
  control: base => ({
    marginTop: 5,
    marginRight: 8,
    border: "1px solid #2d2d37",
    backgroundColor: "#2d2d37",
    color: "white",
    // borderRadius: "0px 0px 4px 4px",
    boxShadow: "none",
    fontSize: "10px",
    height: 24,
    minHeight: 10,
    "&:hover": {},
    display: "flex",
    alignItems: "center",
    alignText: "center",
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "12px",
  }),
  dropdownIndicator: styles => ({
    ...styles,
    "&:hover": {
      border: "#2d2d37",
    },
  }),
  menu: styles => ({
    border: "none",
    marginRight: 8,
  }),
  menuList: styles => ({
    ...styles,
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
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrenchyChange = ({ currencyCountryList, handleSelectChange }) => {
  const xxx = currencyCountryList.map(item => item)
  return (
    <div>
      <Select
        value="palceholder"
        onChange={handleSelectChange}
        styles={colourStyles}
        options={currencyCountryList}
        getOptionLabel={option => option.currency}
        getOptionValue={option => option.country}
      />
    </div>
  )
}

export default CurrenchyChange
