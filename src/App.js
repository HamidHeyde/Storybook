import "./app.css"
import { useState } from "react"
import { TodoApp } from "./features/taskPlanner"
import { CustomComponents as HeatMaps } from "./features/customComponents"
import { LeftMenu } from "./features/leftMenu"
import { ReactComponent as Map } from "./features/customComponents/assets/map.svg"
import { ReactComponent as Todo } from "./features/customComponents/assets/todo.svg"
import { TodoListData } from "./features/taskPlanner/data/TodoListData"

const menuItems = [
  {
    name: "HeatMaps",
    icon: Map
  },
  {
    name: "TodoApp",
    icon: Todo,
  },
]

const getComponent = (name) => {
  const selectedMenu = {
    HeatMaps: {
      Component: HeatMaps,
      Props: {},
    },
    TodoApp: {
      Component: TodoApp,
      Props: { TodoListData },
    },
  }

  return selectedMenu[name] || TodoApp
}

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("HeatMaps")
  const menuItemClickHandler = (name) => {
    setSelectedMenu(name)
  }

  const { Component, Props } = getComponent(selectedMenu)
  

  return (
    <div className="appWrapper">
      <LeftMenu
        items={menuItems}
        selectedMenu={selectedMenu}
        menuItemClickHandler={menuItemClickHandler}
      />
      <div className="mainContent">
        <Component { ...Props } />
      </div>
    </div>
  )
}

export default App
