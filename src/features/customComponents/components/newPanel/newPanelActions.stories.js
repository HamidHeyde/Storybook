import { fn } from "@storybook/test"
import { NewPanelActions } from "./NewPanelActions"
import { storybookSettings } from "../../storybook/globals"

export default {
  title: "Compounds/NewPanelActions",
  component: NewPanelActions,
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
  render: (args) => <NewPanelActions {...args} />,
}

export const Default = {
  args: {
    onAdd: fn(),
    onCancel: fn(),
  },
}
