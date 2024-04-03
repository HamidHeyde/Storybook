import { useState } from "react"
import "./checkbox.css"

export const Checkbox = ({ id, label, onClick, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked || false)

  const handleClick = () => {
    const newValue = !checked
    setChecked(newValue)

    if (onClick) return onClick(id, newValue)
  }

  return (
    <div
      className="checkboxWrapper"
      onClick={handleClick}
    >
      <input type="checkbox" checked={checked} readOnly />
      <label>{label}</label>
    </div>
  )
}

