import "./index.css"
import { useState } from "react"
import { MapData } from "./data/MapsData"
import { PanelHeader } from "./components/mainPanel/PanelHeader"
import { PanelContent } from "./components/mainPanel/PanelContent"

export const CustomComponents = () => {
  const [maps, setMaps] = useState(MapData || [])

  return (
    <div className="customComponentsAppWrapper">
      <div className="customComponentsWrapper">
        <div className="panelWrapper">
          <PanelHeader />
          <PanelContent maps={maps} setMaps={setMaps} />
        </div>
      </div>
    </div>
  )
}
