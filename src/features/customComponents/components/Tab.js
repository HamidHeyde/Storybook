import "./Tab.css"
import propTypes from "prop-types"

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

// propTypes
Tab.propTypes = {
  children: propTypes.node.isRequired,
  backgroundColor: propTypes.string,
}