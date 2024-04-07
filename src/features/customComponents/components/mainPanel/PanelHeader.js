import "./panelHeader.css"
import { ReactComponent as Logo } from "../../assets/noData.svg"

export const PanelHeader = () => {
  return (
    <div className="panelHeader">
      <div className="headerContent">
        <Logo />
        Maps
      </div>
    </div>
  )
}
