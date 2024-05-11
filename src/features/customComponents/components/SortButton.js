import "./sortButton.css"
import { useState, useEffect } from "react"
import propTypes from "prop-types"

const sortFuncs = {
  az_asc: (a, b) => a["name"].localeCompare(b["name"]),
  az_desc: (a, b) => b["name"].localeCompare(a["name"]),
}

export const SortButton = ({ maps, setMaps, sortOptionsActive }) => {
  const [showSortOptions, setShowSortOptions] = useState(false)

  useEffect(() => {
    sortOptionsActive && setShowSortOptions(sortOptionsActive)
  }, [sortOptionsActive])

  const toggleOptionMenu = () => {
    setShowSortOptions((prev) => !prev)
  }

  const handleSortItems = (sortType, sortOrder) => {
    setMaps([ ...maps.sort(sortFuncs[`${sortType}_${sortOrder}`])])
  }

  return (
    <div className="sortButtonWrapper">
      {/* Button */}
      <div className="sortButton" onClick={toggleOptionMenu}>
        <div id="arrowUp" className="arrowUp"></div>
        <div className="spacer"></div>
        <div id="arrowDown" className="arrowDown"></div>
      </div>
      {/* Menu */}
      {showSortOptions && (
        <div className="optionsMenu" onMouseLeave={toggleOptionMenu}>
          <div className="optionsMenuWrapper">
            <div
              className="optionsMenuItem"
              onClick={() => handleSortItems("az", "asc")}
            >
              By A-Z
            </div>
            <div
              className="optionsMenuItem"
              onClick={() => handleSortItems("az", "desc")}
            >
              By Z-A
            </div>
          </div>
          <div className="optionMenuTriangle"></div>
        </div>
      )}
    </div>
  )
}

// propTypes
SortButton.propTypes = {
  maps: propTypes.arrayOf(propTypes.object),
  setMaps: propTypes.func,
  sortOptionsActive: propTypes.bool,
}