import "./homePage.css"
import { useState } from "react"
import { LeftMenuRightContentLayout } from "../Layouts/LeftMenuRightContentLayout"
import { HomePageComponents } from "./HomePageComponents"

const getComponent = (name) => {
  const pageComponentsDetails = HomePageComponents?.filter(
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
        menuItems={HomePageComponents.map((page) => ({
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
