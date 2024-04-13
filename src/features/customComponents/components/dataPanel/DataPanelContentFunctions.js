import "./dataPanelContentFunctions.css"
import { AddButton } from "../AddButton"
import { SortButton } from "../SortButton"
import { MapSearch } from '../MapSearch'

export const DataPanelContentFunctions = ({ setPanel, maps, setMaps }) => {
  const addButtonClickHandler = () => {
    setPanel("NewPanel")
  }

  return (
    <div className="contentFunctions">
      <div className="contentHeaderInfo">{maps.length || "No"} Maps</div>
      <div className="contentHeaderFunctions">
        <MapSearch maps={maps} setMaps={setMaps} />
        <SortButton maps={maps} setMaps={setMaps} />
        <AddButton onClick={addButtonClickHandler} />
      </div>
    </div>
  )
}