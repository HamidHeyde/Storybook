import "./index.css"
import { useState } from "react"
import { MapData } from "./data/MapsData"
import { PanelContent } from "./components/mainPanel/PanelContent"
import { AppAlert } from "./components/AppAlert"
import { MapsMainPanelLayout } from "../Layouts/MapsMainPanelLayout"

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
        <MapsMainPanelLayout>
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
        </MapsMainPanelLayout>
      </div>
    </div>
  )
}
