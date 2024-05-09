import "./arrowIcon.css"
import { ReactComponent as ArrowDown } from "../assets/arrowDown.svg"
import propTypes from "prop-types"

export const ArrowIcon = ({ isOpen, setIsOpen, backgroundColor }) => {
  const toggleHandler = () => setIsOpen((prev) => !prev)

  return (
    <ArrowDown
      className={["arrowDownIcon", isOpen ? "arrowDownIconOpen" : ""].join(" ")}
      onClick={toggleHandler}
      style={{ fill: backgroundColor || "teal"}}
    />
  )
}

// propTypes
ArrowIcon.propTypes = {
  isOpen: propTypes.bool,
  setIsOpen: propTypes.func,
  backgroundColor: propTypes.string,
}