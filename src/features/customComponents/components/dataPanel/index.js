import "./index.css"
import { DataPanelHeader } from "./DataPanelHeader"
import { DataPanelContent } from "./DataPanelContent"

export const DataPanel = ({ setPanel, maps, setMaps }) => {
  return (
    <div className="dataPanelWrapper">
      <DataPanelHeader />
      <DataPanelContent
        setPanel={setPanel}
        maps={maps}
        setMaps={setMaps}
      />
    </div>
  )
}
