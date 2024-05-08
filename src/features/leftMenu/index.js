import "./index.css"
import { MenuItem } from "./components/MenuItem"
import propTypes from "prop-types"

export const LeftMenu = ({ items, selectedMenu, menuItemClickHandler }) => {
  return (
    <div className="leftMenu">
      {items.map((item, index) => (
        <MenuItem
          key={`${item.name}_${index}`}
          item={item}
          selectedMenu={selectedMenu}
          menuItemClickHandler={menuItemClickHandler}
        />
      ))}
    </div>
  )
}

//  propTypes
LeftMenu.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      icon: propTypes.element.isRequired,
    })
  ).isRequired,
  selectedMenu: propTypes.string.isRequired,
  menuItemClickHandler: propTypes.func.isRequired,
}