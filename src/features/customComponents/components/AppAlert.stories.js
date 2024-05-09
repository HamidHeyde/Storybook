import { AppAlert } from "./AppAlert"
import { storybookSettings } from "../storybook/globals"
import { useState } from "react"

// render could be replaced with any other names
const WithStateRenderProps = ({ render }) => {
  const [showAlert, setShowAlert] = useState({
    visible: false,
  })

  return <>{render(showAlert, setShowAlert)}</>
}

const WithState = ({ children }) => {
  const [showAlert, setShowAlert] = useState({
    visible: false,
  })

  return <>{children(showAlert, setShowAlert)}</>
}

const useCustomHooks = () => {
  const [showAlert, setShowAlert] = useState({
    visible: false,
  })

  return { showAlert, setShowAlert }
}

const WithStateHOC = ({ type, message }) => {
  const [showAlert, setShowAlert] = useState({
    visible: false,
  })

  return (
    <>
      {showAlert?.visible && (
        <AppAlert
          type={type}
          message={message}
          visible={showAlert.visible}
          onclose={() => setShowAlert({ ...showAlert, visible: false })}
        />
      )}
      <button onClick={() => setShowAlert({ ...showAlert, visible: true })}>
        Click to see the alert
      </button>
    </>
  )
}

const AppAlertWithState = ({ type, message }) => {
  const backgroundColors = {
    success: "#00C851",
    info: "#0091EA",
    warning: "#FFC107",
    error: "#FF3D00",
  }
  return (
    <>
      {/* 
        CUSTOM HOOKS
        need to Also add = const {showAlert, setShowAlert} = useCustomHooks()
       */}
      {/* {showAlert?.visible && (
        <AppAlert
          type={type}
          message={message}
          visible={showAlert.visible}
          onclose={() => setShowAlert({ ...showAlert, visible: false })}
        />
      )}
      <button onClick={() => setShowAlert({ ...showAlert, visible: true })}>
        Click to see the alert
      </button> */}
      {/* CHILDREN */}
      <WithState>
        {(showAlert, setShowAlert) => (
          <>
            {showAlert?.visible && (
              <AppAlert
                type={type}
                message={message}
                visible={showAlert.visible}
                onclose={() => setShowAlert({ ...showAlert, visible: false })}
              />
            )}
            <button
              style={{
                backgroundColor: backgroundColors[type],
                color: "white",
                padding: "5px 15px",
                borderRadius: "5px",
                border: "none",
              }}
              onClick={() => setShowAlert({ ...showAlert, visible: true })}
            >
              Click to see the alert
            </button>
          </>
        )}
      </WithState>
      {/* RENDER PROPS */}
      {/* <WithStateRenderProps render={(showAlert, setShowAlert) => (
        <>
          {showAlert?.visible && (
            <AppAlert
              type={type}
              message={message}
              visible={showAlert.visible}
              onclose={() => setShowAlert({ ...showAlert, visible: false })}
            />
          )}
          <button
            onClick={() => setShowAlert({ ...showAlert, visible: true })}
          >
            Click to see the alert
          </button>
        </>
      )} />*/}
    </>
  )
}

export default {
  title: "Elements/AppAlert",
  component: AppAlert,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["onclose", "visible"],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{ width: "420px", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => <AppAlertWithState {...args} />,
}

export const Success = {
  args: {
    type: "success",
    message: "This is a success message",
  },
}

export const Info = {
  args: {
    type: "info",
    message: "This is an info message",
  },
}

export const Warning = {
  args: {
    type: "warning",
    message: "This is a warning message",
  },
}

export const Error = {
  args: {
    type: "error",
    message: "This is an error message",
  },
}

