import "./CurrencyUpdate.css"

const CurrencyUpdate = ({ lastCurrencyValueUpdate }) => {
  let unix_timestamp = lastCurrencyValueUpdate
  let date = new Date(unix_timestamp * 1000)
  let hours = date.getHours()
  let minutes = `0${date.getMinutes()}`
  let seconds = `0${date.getSeconds()}`

  let formattedTime = `${hours !== 12 ? `0${hours}` : hours}:${minutes.substr(
    -2
  )}:${seconds.substr(-2)}`

  return <div className="fotmatted-time">{formattedTime}</div>
}

export default CurrencyUpdate
