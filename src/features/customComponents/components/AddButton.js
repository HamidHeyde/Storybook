import './addButton.css'
import AddIcon from "@mui/icons-material/Add"

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
