import "./dataPanelContent.css"
import { DataContentItem } from "./content/DataContentItem"
import { NoDataContent } from "./content/NoDataContent"
import { DataPanelContentFunctions } from "./DataPanelContentFunctions"
import { DataContentItemDetails } from "./content/DataContentItemDetails"

export const DataPanelContent = ({ setPanel, maps, setMaps }) => {
  const starClickHandler = (id) => {
    setMaps(
      maps.map((map) =>
        map.id === id ? { ...map, favorite: !map.favorite } : map
      )
    )
  }

  const pinClickHandler = (id) => {
    let pinnedMaps = maps.filter((map) => map.pin)
    const clickedMap = maps.filter((map) => map.id === id)[0]
    clickedMap.pin = !clickedMap.pin

    pinnedMaps = clickedMap.pin
      ? [{ ...clickedMap }, ...pinnedMaps]
      : pinnedMaps.filter((map) => map.id !== id)

    setMaps([...pinnedMaps, ...maps.filter((map) => !map.pin)])
  }

  return (
    <div className="dataPanelContentWrapper">
      <DataPanelContentFunctions
        setPanel={setPanel}
        maps={maps}
        setMaps={setMaps}
      />
      <div className="contentList">
        {maps.length === 0 ? (
          <NoDataContent />
        ) : (
          maps
            .filter((map) => map.visible)
            .map((map, index) => (
              <DataContentItem
                key={`map_${index}`}
                map={map}
                pinClickHandler={pinClickHandler}
                starClickHandler={starClickHandler}
              >
                <DataContentItemDetails key={`mapDetails_${index}`} map={map} />
              </DataContentItem>
            ))
        )}
      </div>
    </div>
  )
}
