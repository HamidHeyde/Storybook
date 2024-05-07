import { fn } from "@storybook/test"
import { InfoPanel } from "."
import { storybookSettings } from "../../storybook/globals"
import { MapsMainPanelLayout } from "../../../Layouts/MapsMainPanelLayout"

export default {
  title: "Modules/InfoPanel",
  component: InfoPanel,
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
        <MapsMainPanelLayout>
          <Story />
        </MapsMainPanelLayout>
      </div>
    ),
  ],
  render: (args) => <InfoPanel {...args} />
}

export const Default = {
  args: { setPanel: fn() }
}
