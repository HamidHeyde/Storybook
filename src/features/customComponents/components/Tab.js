import "./Tab.css"

export const Tab = ({ children, backgroundColor }) => (
  <div
    className="headerTab"
    style={{
      backgroundColor: backgroundColor || "teal",
      borderColor: backgroundColor || "teal",
    }}
  >
    {children}
  </div>
)
