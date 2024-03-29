import "./index.css"
import { useState } from "react"
import { TodoItem } from "./components/TodoItem"
import { AddTodo } from "./components/AddTodo"
// todoList data
const todoList = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
    pinned: true,
    favorite: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: false,
    pinned: false,
    favorite: true,
  },
  {
    id: 3,
    title: "Learn React Router",
    completed: true,
    pinned: false,
    favorite: false,
  },
]

export const TodoApp = () => {
  const [todo, setTodo] = useState(todoList || [])

  // Star Click Handler
  const onStarClickHandler = (id) => {
    setTodo(
      todo.map((todoItem) => {
        return todoItem.id === id
          ? { ...todoItem, favorite: !todoItem.favorite }
          : todoItem
      })
    )
  }

  // Pin Click Handler
  const onPinClickHandler = (id) => {
    const currentItem = todo.filter((todoItem) => todoItem.id === id)

    if (!currentItem[0].pinned) {
      currentItem[0].pinned = !currentItem[0].pinned
      const restItems = todo.filter((todoItem) => todoItem.id !== id)
      setTodo([...currentItem, ...restItems])
    } else {
      setTodo(
        todo
          .map((todoItem) => {
            return todoItem.id === id
              ? { ...todoItem, pinned: !todoItem.pinned }
              : todoItem
          })
          .sort((a, b) => a.id - b.id)
      )
    }
  }

  // Checkbox Click Handler
  const onCheckboxClickHandler = (id, newValue) => {
    setTodo(
      todo.map((todoItem) => {
        return todoItem.id === id
          ? { ...todoItem, completed: newValue }
          : todoItem
      })
    )
  }

  return (
    <div className="todoAppWrapper">
      {/* Add Todo Item */}
      <AddTodo todo={todo} setTodo={setTodo} />
      {/* Todo List */}
      <div className="todoListWrapper">
        {todo.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onPinClickHandler={onPinClickHandler}
            onStarClickHandler={onStarClickHandler}
            onCheckboxClickHandler={onCheckboxClickHandler}
          />
        ))}
      </div>
    </div>
  )
}
