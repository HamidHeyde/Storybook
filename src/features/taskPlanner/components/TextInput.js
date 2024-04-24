import './textInput.css'

export const TextInput = ({ value, onChange }) => (
  <input
    className="addTodoInput"
    type="text"
    value={value}
    onChange={onChange}
  />
)