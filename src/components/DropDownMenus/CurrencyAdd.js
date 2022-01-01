import Select from "react-select"

import "./CurrencyAdd.css"

const colourStyles = {
  container: styles => ({
    ...styles,
    width: "300px",
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
    type: "number",
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

const CurrencyAdd = ({ userCurrencyList, setUserCurrencyList, currencyCountryListWithValues }) => {
  const addCurrencySelectOptions = currencyCountryListWithValues.filter(
    item => !userCurrencyList.find(({ currencyCode }) => item.currencyCode === currencyCode)
  )

  const handleAddToTheList = data => {
    const mappedUserCurrencyList = currencyCountryListWithValues.map(item => item.currencyCode)
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
  const onKeyDown = e => {
    if (!e.key.match(/[a-zA-Z]/)) e.preventDefault()
  }
  return (
    <div className="custom-select">
      <Select
        onKeyDown={onKeyDown}
        value="placeholder"
        styles={colourStyles}
        options={addCurrencySelectOptions}
        onChange={handleAddToTheList}
        getOptionValue={option => option.currencyCode}
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
                  : option.countryFlag
              }
            />
            <div className="select-text">{option.currencyCode}</div>
          </div>
        )}
      />
    </div>
  )
}

export default CurrencyAdd
