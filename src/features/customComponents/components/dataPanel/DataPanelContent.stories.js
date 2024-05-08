import { fn } from "@storybook/test"
import { DataPanelContent } from "./DataPanelContent"
import { storybookSettings } from "../../storybook/globals"
import { MapData } from "../../data/MapsData"

export default {
  title: "Compounds/DataPanelContent",
  component: DataPanelContent,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["maps"],
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
        <Story />
      </div>
    ),
  ],
  render: (args) => <DataPanelContent {...args} />,
}

export const NoData = {
  args: {
    maps: [],
    setMaps: fn(),
    setPanel: fn(),
  },
}

export const WithData = {
  args: {
    maps: MapData,
    setMaps: fn(),
    setPanel: fn(),
  },
}