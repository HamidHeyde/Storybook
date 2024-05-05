import "./leftMenuRightContentLayout.css"
import { LeftMenu } from "../leftMenu"

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
