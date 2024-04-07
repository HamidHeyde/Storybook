import "./index.css"
import { InfoText } from "./InfoText"
import { InfoActions } from "./InfoActions"

export const InfoPanel = ({ setPanel }) => {
  return (
    <div className="infoPanelWrapper">
      <InfoText />
      <InfoActions setPanel={setPanel} />
    </div>
  )
}
