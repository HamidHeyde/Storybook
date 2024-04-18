import "./newPanelActions.css"

export const NewPanelActions = ({ onAdd, onCancel }) => {
  return (
    <div className="newPanelActionsWrapper">
      <button className="actionButton" onClick={onCancel}>
        Go Back
      </button>
      <button className="actionButton" onClick={onAdd}>
        Add Map
      </button>
    </div>
  )
}
