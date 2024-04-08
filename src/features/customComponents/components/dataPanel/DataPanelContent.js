import "./dataPanelContent.css"
import { DataContent } from "./content/DataContent"
import { NoDataContent } from "./content/NoDataContent"
import { DataPanelContentFunctions } from "./DataPanelContentFunctions"

export const DataPanelContent = ({ setPanel, maps, setMaps }) => {
  return (
    <div className="dataPanelContentWrapper">
      <DataPanelContentFunctions
        setPanel={setPanel}
        mapsCount={maps.length}
        setMaps={setMaps}
      />
      <div className="contentList">
        {maps.length === 0 ? <NoDataContent /> : <DataContent maps={maps} />}
      </div>
    </div>
  )
}
