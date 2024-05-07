import "./mapsMainPanelLayout.css"
import { PanelHeader } from "../customComponents/components/mainPanel/PanelHeader"

export const MapsMainPanelLayout = ({ children }) => {
  return (
    <div className="panelWrapper">
      <PanelHeader />
      <div className="panelContent">{children}</div>
    </div>
  )
}
