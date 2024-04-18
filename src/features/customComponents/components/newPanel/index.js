import "./index.css"
import { useState } from "react"
import { NewPanelContent } from "./NewPanelContent"
import { NewPanelActions } from "./NewPanelActions"
import { getFormValidationMessage, getRequestData } from "../utils/utils"

export const NewPanel = ({ setPanel, maps, setMaps, showAlert, setShowAlert }) => {
  const [formFields, setFormFields] = useState({
    numberSlider: [],
    sizeSlider: [0, 25, 50, 75, 100],
    colorSlider: [0, 35, 100],
    shadowSlider: [0, 35, 65, 100],
  })

  const handleOnChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    const fieldLabel = e.target.text

    setFormFields((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
      ...(!!fieldLabel && { [`${fieldName}Label`]: fieldLabel }),
    }))
  }

  const handleOnAdd = () => {
    const validationMessage = getFormValidationMessage(formFields)
    console.log(validationMessage)
    if (validationMessage) {
      setShowAlert({
        ...{
          type: "error",
          message: validationMessage,
          visible: true,
        },
      })
      return
    }

    if (!validationMessage) {
      const requestData = {
        ...getRequestData(formFields),
        id: maps.length + 1,
        pin: false,
        favorite: false,
        visible: true,
      }

      setMaps([
        ...maps,
        {
          ...requestData,
        },
      ])

      setShowAlert({
        ...{
          type: "success",
          message: "New Panel Added Successfully",
          visible: true,
        },
      })

      setPanel("DataPanel")
    }
  }

  const handleOnCancel = () => {
    setPanel("DataPanel")
  }

  return (
    <div className="newPanelWrapper">
      <NewPanelContent onChange={handleOnChange} />
      <NewPanelActions onAdd={handleOnAdd} onCancel={handleOnCancel} />
    </div>
  )
}
