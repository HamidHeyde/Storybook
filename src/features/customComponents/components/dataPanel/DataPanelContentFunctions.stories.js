import { fn } from "@storybook/test"
import { DataPanelContentFunctions } from "./DataPanelContentFunctions"
import { storybookSettings } from "../../storybook/globals"

export default {
  title: "Compounds/DataPanelContentFunctions",
  component: DataPanelContentFunctions,
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
  render: (args) => <DataPanelContentFunctions {...args} />,
}

export const Default = {
  args: {
    maps: [],
    setMaps: fn(),
    setPanel: fn(),
  },
}
