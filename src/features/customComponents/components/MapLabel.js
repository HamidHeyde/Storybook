import "./mapLabel.css"
import propTypes from "prop-types"

export const MapLabel = ({ type, width, text }) => (
  <div className={type === "title" ? "titleText" : "normalText"} style={{width}}>
    {text}
  </div>
)

// propTypes
MapLabel.propTypes = {
  type: propTypes.string,
  width: propTypes.string,
  text: propTypes.string,
}