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

export const PanelContent = ({ maps, setMaps, showAlert, setShowAlert }) => {
  const [panel, setPanel] = useState("InfoPanel")

  const Component = getPanel(panel)

  const panelProperties = {
    ...{ setPanel },
    ...(panel === "NewPanel" && { maps, setMaps, showAlert, setShowAlert }),
    ...(panel === "DataPanel" && { maps, setMaps }),
  }

  return <Component {...panelProperties} />
}
