import { fn } from "@storybook/test"
import { Checkbox } from "./Checkbox"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Elements/Checkbox",
  component: Checkbox,
  parameters: {
    ...storybookSettings("centered")
  },
  tags: ["autodocs"],
  render: (args) => <Checkbox {...args} />,
}

export const Default = {
  args: {
    id: 1,
    label: "",
    onClick: fn(),
    defaultChecked: false,
  },
}

export const Checked = {
  args: {
    id: 1,
    label: "",
    onClick: fn(),
    defaultChecked: true,
  },
}
