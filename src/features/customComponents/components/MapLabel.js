import "./mapLabel.css"

export const MapLabel = ({ type, width, text }) => (
  <div className={type === "title" ? "titleText" : "normalText"} style={{width}}>
    {text}
  </div>
)
