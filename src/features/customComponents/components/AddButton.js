import './addButton.css'
import AddIcon from "@mui/icons-material/Add"

export const AddButton = ({ onClick }) => {
  const addButtonProperties = {
    ...(onClick && { onClick }),
    className: "addButton", 
  }

  return <AddIcon {...addButtonProperties} />
}
