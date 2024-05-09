import "./appAlert.css"
import { useState, useEffect } from "react"
import Alert from "@mui/material/Alert"
import propTypes from "prop-types"

export const AppAlert = ({ type, message, visible, onclose }) => {
  const [visibleState, setVisibleState] = useState(visible)

  useEffect(() => {
    if (!setVisibleState) return

    setTimeout(() => {
      setVisibleState(false)
      
      setTimeout(() => {
        onclose() && onclose()
      }, 1000)

    }, 2000)

  }, [setVisibleState])

  return (
    <div
      className="alertWrapper"
      style={{
        opacity: visibleState ? 1 : 0
      }}
    >
      <Alert style={{ width: "97%" }} severity={type}>
        {message}
      </Alert>
    </div>
  )
}

// propTypes
AppAlert.propTypes = {
  type: propTypes.oneOf(["success", "info", "warning", "error"]).isRequired,
  message: propTypes.string.isRequired,
  visible: propTypes.bool.isRequired,
  onclose: propTypes.func
}