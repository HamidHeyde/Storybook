import "./pin.css"
import PropTypes from "prop-types"
import PushPinIcon from "@mui/icons-material/PushPin"


/**
 * Renders a pin component with the specified properties.
 */
export const Pin = ({ id, pinned, onClick, size }) => {
  const pinClass = !!pinned ? "pinned" : "notPinned"

  const pinProps = {
    className: ["pinBase", pinClass].join(" "),
    ...(onClick && { onClick: () => onClick(id) }),
    style: { "font-size": size ? `${size}rem` : '1.5rem' },
  }

  return (
    <div className="pinWrapper">
      <PushPinIcon {...pinProps} />
    </div>
  )
}

// PropTypes
Pin.propTypes = {
  id: PropTypes.number,
  pinned: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
}
