import { fn } from "@storybook/test"
import { Pin } from "./Pin"
import { storybookSettings } from "../storybook/globals"


export default {
  title: "TaskPlanner/Elements/Pin",
  component: Pin,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["size"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <Pin {...args} />,
}

export const Default = {
  args: {
    id: 1,
    pinned: false,
    onClick: fn(),
    size: 5,
  }
}


export const Pinned = {
  args: {
    ...Default.args,
    pinned: true,
  }
}