import "./taskItem.css"
import { Pin } from "./Pin"
import { Star } from "./Star"
import { Checkbox } from "./Checkbox"

export const TaskItem = ({
  todoItem,
  onStarClickHandler,
  onPinClickHandler,
  onCheckboxClickHandler,
}) => {
  const { id, title, completed, pinned, favorite } = todoItem

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
        <Star id={id} favorite={favorite} onClick={onStarClickHandler} />
        <Pin id={id} pinned={pinned} onClick={onPinClickHandler} />
      </div>
    </div>
  )
}
