import { fn } from "@storybook/test"
import { NewPanel } from "."
import { storybookSettings } from "../../storybook/globals"
import { MapsMainPanelLayout } from "../../../Layouts/MapsMainPanelLayout"

export default {
  title: "Modules/NewPanel",
  component: NewPanel,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["showAlert", "setShowAlert"],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "465px",
        }}
      >
        <MapsMainPanelLayout >
          <Story />
        </MapsMainPanelLayout>
      </div>
    ),
  ],
  render: (args) => <NewPanel {...args} />,
}

export const Default = {
  args: {
    maps: [],
    setMaps: fn(),
    showAlert: false,
    setShowAlert: fn(),
    setPanel: fn(),
  }
}
