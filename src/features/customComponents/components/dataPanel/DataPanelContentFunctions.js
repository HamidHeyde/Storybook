import "./dataPanelContentFunctions.css"
import { AddButton } from "../AddButton"
import { SortButton } from "../SortButton"
import { MapSearch } from '../MapSearch'

export const DataPanelContentFunctions = ({ setPanel, mapsCount, setMaps }) => {
  const addButtonClickHandler = () => {
    setPanel("NewPanel")
  }

  return (
    <div className="contentFunctions">
      <div className="contentHeaderInfo">{mapsCount || "No"} Maps</div>
      <div className="contentHeaderFunctions">
        <MapSearch />
        <SortButton />
        <AddButton onClick={addButtonClickHandler} />
      </div>
    </div>
  )
}