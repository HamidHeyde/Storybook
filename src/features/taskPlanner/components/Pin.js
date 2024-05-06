import "./pin.css"
import PropTypes from "prop-types"
import PushPinIcon from "@mui/icons-material/PushPin"

/**
 * Renders a pin component with the specified properties.
 */
export const Pin = ({ id, pinned, onClick, size, backgroundColor }) => {
  const pinProps = {
    className: "pinBase",
    style: {
      fontSize: size ? `${size}rem` : "1.5rem",
      ...(pinned && { fill: backgroundColor || "teal", transform: "rotate(45deg)" }),
      ...(!pinned && { fill: "#eee" }),
    },
    ...(onClick && { onClick: () => onClick(id) }),
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
  backgroundColor: PropTypes.string,
}
