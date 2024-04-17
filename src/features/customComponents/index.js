import "./index.css"
import { useState } from "react"
import { MapData } from "./data/MapsData"
import { PanelHeader } from "./components/mainPanel/PanelHeader"
import { PanelContent } from "./components/mainPanel/PanelContent"
import { AppAlert } from "./components/AppAlert"

export const CustomComponents = () => {
  const [maps, setMaps] = useState(MapData || [])
  const [showAlert, setShowAlert] = useState({
    type: "",
    message: "",
    visible: false,
  })

  return (
    <div className="customComponentsAppWrapper">
      <div className="customComponentsWrapper">
        <div className="panelWrapper">
          <PanelHeader />
          <PanelContent
            maps={maps}
            setMaps={setMaps}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          {showAlert?.visible && (
            <AppAlert
              type={showAlert.type}
              message={showAlert.message}
              visible={showAlert.visible}
              onclose={() => setShowAlert({ ...showAlert, visible: false })}
            />
          )}
        </div>
      </div>
    </div>
  )
}
