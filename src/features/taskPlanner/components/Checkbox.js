import "./checkbox.css"
import { useState } from "react"
import PropTypes from "prop-types"

export const Checkbox = ({ id, label, onClick, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked || false)

  const handleClick = () => {
    const newValue = !checked
    setChecked(newValue)

    if (onClick) return onClick(id, newValue)
  }

  return (
    <div className="checkboxWrapper" onClick={handleClick}>
      <input type="checkbox" checked={checked} readOnly />
      <label>{label}</label>
    </div>
  )
}

// PropTypes
Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  defaultChecked: PropTypes.bool,
}
