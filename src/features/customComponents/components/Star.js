import "./star.css"
import StarIcon from "@mui/icons-material/Star"

export const Star = ({ id, favorite, onClick }) => {
  const starClass = favorite ? "starred2" : "notStarred2"

  const starProps = {
    className: ["starBase", starClass].join(" "),
    ...(onClick && { onClick: () => onClick(id) }),
  }

  return (
    <div className="starWrapper">
      <StarIcon {...starProps} />
    </div>
  )
}
