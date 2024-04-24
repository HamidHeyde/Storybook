import "./addTodo.css"
import { useRef } from "react"
import { Button } from "./Button"
import { TextInput } from "./TextInput"

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
      <TextInput value={inputRef.current.value} onChange={inputChangeHandler} />
      <Button text="Add Todo Item" onClick={addTodoHandler} />
    </div>
  )
}
