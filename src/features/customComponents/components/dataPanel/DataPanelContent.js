import "./dataPanelContent.css"
import { DataContentItem } from "./content/DataContentItem"
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
        {maps.length === 0 ? <NoDataContent /> : maps.map((map, index) => (
          <DataContentItem key={`map_${index}`} map={map} />
        ))}
      </div>
    </div>
  )
}
