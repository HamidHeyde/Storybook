import './dataPanelHeader.css'
import { Tab } from '../Tab'

export const DataPanelHeader = () => {
  return (
    <div className="dataPanelHeaderWrapper">
      <div className="headerTop">
        <Tab>Active</Tab>
      </div>
    </div>
  )
}