import "./sortButton.css"
import { useState } from "react"

export const SortButton = () => {
  const [showSortOptions, setShowSortOptions] = useState(false)

  const toggleOptionMenu = () => {
    setShowSortOptions((prev) => !prev)
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
              // onClick={() => handleSortItems("az", "asc")}
            >
              By A-Z
            </div>
            <div
              className="optionsMenuItem"
              // onClick={() => handleSortItems("az", "desc")}
            >
              By Z-A
            </div>
            <div
              className="optionsMenuItem"
              // onClick={() => handleSortItems("date", "asc")}
            >
              By Date Asc
            </div>
            <div
              className="optionsMenuItem"
              // onClick={() => handleSortItems("date", "desc")}
            >
              By Date Desc
            </div>
          </div>
          <div className="optionMenuTriangle"></div>
        </div>
      )}
    </div>
  )
}
