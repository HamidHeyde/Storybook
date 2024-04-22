import "./addTodo.css"
import { useRef } from "react"

export const AddTodo = ({ todo, setTodo }) => {
  const inputRef = useRef("")

  const inputChangeHandler = (e) => {
    inputRef.current = e.target.value
  }

  const addTodoHandler = () => {
    if (!inputRef.current) return

    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        title: inputRef.current,
        completed: false,
        pinned: false,
        favorite: false,
      },
    ])

    inputRef.current = ""
  }

  return (
    <div className="addTodoWrapper">
      <input
        className="addTodoInput"
        type="text"
        value={inputRef.current.value}
        onChange={inputChangeHandler}
      />
      <button
        className="addTodoButton"
        onClick={addTodoHandler}
      >
        Add Todo Item
      </button>
    </div>
  )
}
