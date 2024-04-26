import './button.css'
import PropTypes from "prop-types"

export const Button = ({ width, text, onClick }) => (
  <button className="addTodoButton" style={{width: `${width}%` || '100%'}} onClick={onClick}>
    {text}
  </button>
)

// PropTypes
Button.propTypes = {
  width: PropTypes.number,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}