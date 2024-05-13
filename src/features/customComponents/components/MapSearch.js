import "./mapSearch.css"
import { useState, useEffect } from "react"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import propTypes from "prop-types"

export const MapSearch = ({ maps, setMaps, searchBoxOpen }) => {
  const [searchText, setSearchText] = useState("")
  const [isSearchBoxOpen, SetIsSearchBoxOpen] = useState(false)

  useEffect(() => {
    searchBoxOpen && SetIsSearchBoxOpen(searchBoxOpen)
  }, [searchBoxOpen])

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearchButtonClick()
    }
  }

  const handleSearchButtonClick = (e) => {
    // if the search component is minimized
    if (!isSearchBoxOpen) return SetIsSearchBoxOpen(true)

    setMaps(maps.map((item) => ({ ...item, ...({visible: item.name.toLowerCase().includes(searchText.toLowerCase()) ? true: false}) })))
  }

  const searchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleClearButtonClick = () => {
    setSearchText("")

    setMaps(maps.map((item) => ({ ...item, visible: true })))

    SetIsSearchBoxOpen(false)
  }

  return (
    <div className="mapSearchWrapper">
      <input
        type="text"
        className={[
          "searchTextBox",
          isSearchBoxOpen ? "searchTextBoxClosed" : "searchTextBoxOpen",
        ].join(" ")}
        value={searchText}
        onChange={searchTextChange}
        disabled={!isSearchBoxOpen}
        onKeyDown={handleOnKeyDown}
      />
      <SearchIcon className="searchIcon" onClick={handleSearchButtonClick} />
      {isSearchBoxOpen && (
        <ClearIcon className="clearIcon" onClick={handleClearButtonClick} />
      )}
    </div>
  )
}

//propTypes
MapSearch.propTypes = {
  maps: propTypes.array,
  setMaps: propTypes.func,
  searchBoxOpen: propTypes.bool,
}