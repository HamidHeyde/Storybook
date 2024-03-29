import "./index.css"
import { MenuItem } from "./components/MenuItem"

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
