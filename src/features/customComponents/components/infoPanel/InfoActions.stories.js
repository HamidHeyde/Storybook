import { fn } from "@storybook/test"
import { InfoActions } from "./InfoActions"
import { storybookSettings } from "../../storybook/globals"

export default {
  title: "Compounds/InfoPanelActions",
  component: InfoActions,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 1px 20px 4px #eeeeee",
          padding: "5px 20px"
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => <InfoActions {...args} />,
}

export const Default = {
  args: { setPanel: fn() },
}
