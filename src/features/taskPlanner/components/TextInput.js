import './textInput.css'
import PropTypes from "prop-types"

export const TextInput = ({ width, value, onChange }) => (
  <input
    className="addTodoInput"
    style={{ width: `${width}%` || '100%' }}
    type="text"
    value={value}
    onChange={onChange}
  />
)

// PropTypes
TextInput.propTypes = {
  width: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
}