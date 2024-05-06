import "./star.css"
import PropTypes from "prop-types"
import StarIcon from "@mui/icons-material/Star"

export const Star = ({ id, favorite, onClick, size, backgroundColor }) => {
  const starProps = {
    className: "starBase",
    style: {
      fontSize: size ? `${size}rem` : "1.5rem",
      ...(favorite && {
        fill: backgroundColor || "teal",
        transform: "rotate(45deg)",
      }),
      ...(!favorite && { fill: "#eee" }),
    },
    ...(onClick && { onClick: () => onClick(id) }),
  }

  return (
    <div className="starWrapper">
      <StarIcon {...starProps} />
    </div>
  )
}

// PropTypes
Star.propTypes = {
  id: PropTypes.number,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
}
