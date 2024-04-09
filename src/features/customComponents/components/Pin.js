import './pin.css'
import PushPinIcon from "@mui/icons-material/PushPin"

export const Pin = ({ id, pin, onClick }) => {
  const pinClass = pin ? "pinned2" : "notPinned2"

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

