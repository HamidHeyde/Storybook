import "./arrowIcon.css"
import { ReactComponent as ArrowDown } from "../assets/arrowDown.svg"

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
