import "./infoActions.css"
import { Checkbox } from "../Checkbox"

export const InfoActions = ({ setPanel }) => {
  const nextButtonHandler = () => {
    setPanel("DataPanel")
  }

  return (
    <div className="infoActionWrapper">
      <div className="checkBoxWrapper">
        <Checkbox />
        <div className="text">Don't show this panel again</div>
      </div>
      <button className="infoButton" onClick={nextButtonHandler}>Next</button>
    </div>
  )
}
