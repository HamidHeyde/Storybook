import "./menuItem.css"
import propTypes from "prop-types"

export const MenuItem = ({ item, selectedMenu, menuItemClickHandler }) => {
  const { name, icon } = item
  const Component = icon

  return (
    <div
      className={[
        `menuItem`,
        `${selectedMenu === name ? `menuItemActive` : `menuItemDeActive`}`,
      ].join(" ")}
      onClick={() => menuItemClickHandler(name)}
    >
      <Component className="menuIcon" />
      <div className="menuText">{name}</div>
    </div>
  )
}

// propTypes
MenuItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    icon: propTypes.element.isRequired,
  }).isRequired,
  selectedMenu: propTypes.string.isRequired,
  menuItemClickHandler: propTypes.func.isRequired,
}