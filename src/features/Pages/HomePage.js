import './homePage.css'
import { useState } from 'react'
import { TodoApp } from "../taskPlanner"
import { CustomComponents as HeatMaps } from "../customComponents"
import { LeftMenuRightContentLayout } from "../Layouts/LeftMenuRightContentLayout"
import { ReactComponent as Map } from "../customComponents/assets/map.svg"
import { ReactComponent as Todo } from "../customComponents/assets/todo.svg"
import { TodoListData } from "../taskPlanner/data/TodoListData"

const pageComponents = [
  {
    name: "HeatMaps",
    icon: Map,
    Component: HeatMaps,
    Props: {},
  },
  {
    name: "TodoApp",
    icon: Todo,
    Component: TodoApp,
    Props: { TodoListData },
  },
]

const getComponent = (name) => {
  const pageComponentsDetails = pageComponents?.filter(
    (page) => page.name === name
  )

  return pageComponentsDetails[0]
}

export const HomePage = () => {

  const [selectedMenu, setSelectedMenu] = useState("HeatMaps")
  const { Component, Props } = getComponent(selectedMenu)

  return (
    <div className="appWrapper">
      <LeftMenuRightContentLayout
        menuItems={pageComponents.map((page) => ({
          name: page.name,
          icon: page.icon,
        }))}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      >
        <Component {...Props} />
      </LeftMenuRightContentLayout>
    </div>
  )
}