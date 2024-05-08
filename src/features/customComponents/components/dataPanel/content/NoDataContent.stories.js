import { NoDataContent } from "./NoDataContent"
import { storybookSettings } from "../../../storybook/globals"

export default {
  title: "Compounds/NoDataContent",
  component: NoDataContent,
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
  render: (args) => <NoDataContent {...args} />,
}

export const Default = {
  args: {},
}

