import "./leftMenuRightContentLayout.css"
import { LeftMenu } from "../leftMenu"
import propTypes from "prop-types"

export const LeftMenuRightContentLayout = ({
  children,
  menuItems,
  selectedMenu,
  setSelectedMenu,
}) => (
  <>
    <LeftMenu
      items={menuItems}
      selectedMenu={selectedMenu}
      menuItemClickHandler={setSelectedMenu}
    />
    <div className="mainContent">{children}</div>
  </>
)

// propTypes
LeftMenuRightContentLayout.propTypes = {
  children: propTypes.node.isRequired,
  menuItems: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      icon: propTypes.element.isRequired,
    })
  ).isRequired,
  selectedMenu: propTypes.string.isRequired,
  setSelectedMenu: propTypes.func.isRequired,
}