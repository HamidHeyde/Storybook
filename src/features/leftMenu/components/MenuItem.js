import "./menuItem.css"

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
