import "./taskItem.css"
import { Pin } from "./Pin"
import { Star } from "./Star"
import { Checkbox } from "./Checkbox"
import PropTypes from "prop-types"
import { blue } from "../../theme/ColorPallette"

export const TaskItem = ({
  taskItem,
  onStarClickHandler,
  onPinClickHandler,
  onCheckboxClickHandler,
}) => {
  const { id, title, completed, pinned, favorite } = taskItem

  return (
    <div className="todoItem">
      <div className="left">
        <Checkbox
          id={id}
          label={title}
          defaultChecked={completed}
          onClick={onCheckboxClickHandler}
        />
      </div>
      <div className="right">
        <Star
          id={id}
          favorite={favorite}
          onClick={onStarClickHandler}
          backgroundColor={blue[400]}
        />
        <Pin
          id={id}
          pinned={pinned}
          onClick={onPinClickHandler}
          backgroundColor={blue[400]}
        />
      </div>
    </div>
  )
}

// prop types
TaskItem.propTypes = {
  taskItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    pinned: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  onStarClickHandler: PropTypes.func,
  onPinClickHandler: PropTypes.func,
  onCheckboxClickHandler: PropTypes.func,
}
