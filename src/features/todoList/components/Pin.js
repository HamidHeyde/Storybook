import './pin.css'
import PushPinIcon from "@mui/icons-material/PushPin"

export const Pin = ({ id, pinned, onClick }) => {
  const pinClass = pinned ? "pinned" : "notPinned"

  const pinProps = {
    className: ["pinBase", pinClass].join(" "),
    ...(onClick && { onClick: () => onClick(id) }),
  }

  return (
    <div className="pinWrapper">
      <PushPinIcon {...pinProps} />
    </div>
  )
}

