import "./mapSearch.css"
import { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"

export const MapSearch = () => {
  const [searchText, setSearchtext] = useState("")
  const [isSearchBoxOpen, SetIsSearchBoxOpen] = useState(false)

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearchButtonClick()
    }
  }

  const handleSearchButtonClick = (e) => {
    // if the search component is minimized
    if (!isSearchBoxOpen) return SetIsSearchBoxOpen(true)

    // if the search component is open
    // setSortSearch({
    //   ...sortSearch,
    //   [currentTab]: {
    //     ...sortSearch[currentTab],
    //     searchText: searchText,
    //   },
    // })
  }

  const searchTextChange = (e) => {
    setSearchtext(e.target.value)
  }

  const handleClearButtonClick = () => {
    setSearchtext("")

    // setSortSearch({
    //   ...sortSearch,
    //   [currentTab]: {
    //     ...sortSearch[currentTab],
    //     searchText: "",
    //   },
    // })

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
