import "./panelContent.css"
import { useState } from "react"
import { InfoPanel } from "../infoPanel"
import { DataPanel } from "../dataPanel"
import { NewPanel } from "../newPanel"

const getPanel = (panel) => {
  const stringToComponent = {
    InfoPanel: InfoPanel,
    DataPanel: DataPanel,
    NewPanel: NewPanel,
  }

  return stringToComponent[panel] || InfoPanel
}

export const PanelContent = ({ maps, setMaps }) => {
  const [panel, setPanel] = useState("InfoPanel")

  const Component = getPanel(panel)

  const panelProperties = {
    ...{ setPanel },
    ...(panel === "NewPanel" && { maps, setMaps }),
    ...(panel === "DataPanel" && { maps, setMaps }),
  }

  return (
    <div className="panelContent">
      <Component {...panelProperties} />
    </div>
  )
}
