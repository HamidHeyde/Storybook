import "./mapsMainPanelLayout.css"
import { PanelHeader } from "../customComponents/components/mainPanel/PanelHeader"
import propTypes from "prop-types"

export const MapsMainPanelLayout = ({ children }) => {
  return (
    <div className="panelWrapper">
      <PanelHeader />
      <div className="panelContent">{children}</div>
    </div>
  )
}

// propTypes
MapsMainPanelLayout.propTypes = {
  children: propTypes.node.isRequired,
}