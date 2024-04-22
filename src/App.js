import "./app.css"
import { useState } from "react"
import { TodoApp } from "./features/taskPlanner"
import { CustomComponents as HeatMaps } from "./features/customComponents"
import { LeftMenu } from "./features/leftMenu"
import { ReactComponent as Map } from "./features/customComponents/assets/map.svg"
import { ReactComponent as Todo } from "./features/customComponents/assets/todo.svg"

const menuItems = [
  {
    name: "HeatMaps",
    icon: Map,
  },
  {
    name: "TodoApp",
    icon: Todo,
  },
]

const getComponent = (name) => {
  const selectedMenu = {
    "HeatMaps": HeatMaps,
    "TodoApp": TodoApp,
  }

  return selectedMenu[name] || TodoApp
}

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("HeatMaps")
  const menuItemClickHandler = (name) => {
    setSelectedMenu(name)
  }

  const Component = getComponent(selectedMenu)

  return (
    <div className="appWrapper">
      <LeftMenu
        items={menuItems}
        selectedMenu={selectedMenu}
        menuItemClickHandler={menuItemClickHandler}
      />
      <div className="mainContent">
        <Component/>
      </div>
    </div>
  )
}

export default App
