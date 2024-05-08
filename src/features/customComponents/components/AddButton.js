import './addButton.css'
import AddIcon from "@mui/icons-material/Add"
import propTypes from "prop-types"

export const AddButton = ({ onClick, backgroundColor }) => {
  const addButtonProperties = {
    ...(onClick && { onClick }),
    className: "addButton", 
  }

  return (
    <AddIcon
      {...addButtonProperties}
      style={( backgroundColor && {color: backgroundColor })}
    />
  )
}

// propTypes
AddButton.propTypes = {
  onClick: propTypes.func,
  backgroundColor: propTypes.string,
}