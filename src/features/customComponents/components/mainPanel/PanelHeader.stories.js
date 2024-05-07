import { PanelHeader } from "./PanelHeader"
import { storybookSettings } from "../../storybook/globals"

export default {
  title: "Compounds/AllPanelHeader",
  component: PanelHeader,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return <PanelHeader {...args} />
  },
}

export const Default = {
  args: {}
}
