import Select from "react-select"
import styled from "styled-components"

const StyledSelect = styled(Select)`
  @media (max-width: 600px) {
    width: 100%;
  }
`

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "21vh",
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
    display: "flex",
    alignItems: "center",
    alignText: "center",
    "@media (max-width: 896px)": {
      height: "34px",
      fontSize: 17,
    },
  }),
  input: styles => ({
    ...styles,
    color: "white",
    fontSize: "12px",
    maxLength: "3",
    "@media (max-width: 896px)": {
      height: "34px",
      fontSize: 17,
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
      "@media (max-width: 896px)": {
        height: "34px",
        fontSize: 17,
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
        getOptionLabel={option => option.currencyCode}
        getOptionValue={option => option.currencyName}
      />
    </div>
  )
}

export default CurrencyChange
