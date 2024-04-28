import { fn } from "@storybook/test"
import { Checkbox } from "./Checkbox"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "TaskPlanner/Elements/Checkbox",
  component: Checkbox,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["defaultChecked"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <Checkbox {...args} />,
}

export const Default = {
  args: {
    id: 1,
    label: "Checkbox Text",
    onClick: fn(),
    defaultChecked: false,
  },
}

export const Checked = {
  args: {
    id: 1,
    label: "Checkbox Text",
    onClick: fn(),
    defaultChecked: true,
  },
}
