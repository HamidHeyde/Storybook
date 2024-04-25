import './button.css'

export const Button = ({ text, onClick }) => (
  <button className="addTodoButton" onClick={onClick}>
    {text}
  </button>
)