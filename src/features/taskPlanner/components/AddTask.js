import "./addTask.css"
import { useRef } from "react"
import { Button } from "./Button"
import { TextInput } from "./TextInput"
import PropTypes from "prop-types"

export const AddTask = ({ todo, setTodo }) => {
  const inputRef = useRef("")

  const inputChangeHandler = (e) => {
    inputRef.current = e.target.value
  }

  const addTaskHandler = () => {
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
      <TextInput
        width={60}
        value={inputRef.current.value}
        onChange={inputChangeHandler}
      />
      <Button width={30} text="Add a Task" onClick={addTaskHandler} />
    </div>
  )
}

// PropTypes
AddTask.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      pinned: PropTypes.bool,
      favorite: PropTypes.bool,
    })
  ),
  setTodo: PropTypes.func,
}