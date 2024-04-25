import "./star.css"
import PropTypes from "prop-types"
import StarIcon from "@mui/icons-material/Star"

export const Star = ({ id, favorite, onClick, size }) => {
  const starClass = favorite ? "starred" : "notStarred"

  const starProps = {
    className: ["starBase", starClass].join(" "),
    ...(onClick && { onClick: () => onClick(id) }),
    style: { "font-size": size ? `${size}rem` : "1.5rem" },
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
  pinned: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
}
