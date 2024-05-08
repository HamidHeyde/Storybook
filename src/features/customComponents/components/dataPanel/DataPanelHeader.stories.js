import { DataPanelHeader } from "./DataPanelHeader"
import { storybookSettings } from "../../storybook/globals"

export default {
  title: "Compounds/DataPanelHeader",
  component: DataPanelHeader,
  parameters: {
    ...storybookSettings("centered"),
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
}

export const Default = {
  args: {},
  render: (args) => <DataPanelHeader {...args} />,
}
