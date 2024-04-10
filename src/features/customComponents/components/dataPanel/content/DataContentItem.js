import "./dataContentItem.css"
import { useState } from "react"
import { ArrowIcon } from "../../ArrowIcon"
import { Star } from "../../Star"
import { Pin } from "../../Pin"

export const DataContentItem = ({
  children,
  map,
  starClickHandler,
  pinClickHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { id, name, favorite, pin } = map

  return (
    <div className="mapWrapper">
      <div className="mapHeader">
        <div className="left">
          <ArrowIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="text">{name}</div>
        </div>
        <div className="right">
          <Pin id={id} pin={pin} onClick={pinClickHandler} />
          <Star id={id} favorite={favorite} onClick={starClickHandler} />
        </div>
      </div>
      {isOpen && <div className="mapSettingsWrapper">{children}</div>}
    </div>
  )
}
