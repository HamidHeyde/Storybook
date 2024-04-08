import './noDataContent.css'
import { ReactComponent as NoData } from "../../../assets/noData.svg"


export const NoDataContent = () => {
  return (
    <div className="noDataWrapper">
      <NoData />
      <div className="title">No maps to Display</div>
    </div>
  )
}