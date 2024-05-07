import { fn } from "@storybook/test"
import { DataPanel } from "."
import { storybookSettings } from "../../storybook/globals"
import { MapsMainPanelLayout } from "../../../Layouts/MapsMainPanelLayout"
import { MapData } from "../../data/MapsData"

export default {
  title: "Modules/DataPanel",
  component: DataPanel,
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
        <MapsMainPanelLayout>
          <Story />
        </MapsMainPanelLayout>
      </div>
    ),
  ],
  render: (args) => <DataPanel {...args} />,
}

export const NoData = {
  args: {
    maps: [],
    setMaps: fn(),
    showAlert: false,
    setShowAlert: fn(),
    setPanel: fn(),
  },
}

export const WithData = {
  args: {
    maps: MapData,
    setMaps: fn(),
    showAlert: false,
    setShowAlert: fn(),
    setPanel: fn(),
  },
}
