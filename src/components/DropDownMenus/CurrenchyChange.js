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
    "&:hover": {},
    display: "flex",
    alignItems: "center",
    alignText: "center",
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "12px",
    maxLength: "3",
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
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
}

const CurrenchyChange = ({
  baseArrFiltered,
  handleSelectChange,
  baseCurrency,
}) => {
  return (
    <div>
      <Select
        defaultValue={{ currency: baseCurrency }}
        onChange={handleSelectChange}
        styles={colourStyles}
        options={baseArrFiltered}
        getOptionLabel={option => option.currency}
        getOptionValue={option => option.country}
      />
    </div>
  )
}

export default CurrenchyChange
